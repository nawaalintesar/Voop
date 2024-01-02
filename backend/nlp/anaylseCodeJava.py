import javalang
import json
import sys


def parseCode(java_code):
    relationships = []
    
    entity_info_list = []

    polymorphic_methods = set()

    for path, node in javalang.parse.parse(java_code):
        if isinstance(node, javalang.tree.ClassDeclaration):
            entity_type = 'class'

        elif isinstance(node, javalang.tree.InterfaceDeclaration):
            entity_type = 'interface'
        else:
            continue

        class_name = node.name
        is_abstract = any(modifier == 'abstract' for modifier in node.modifiers)

        if hasattr(node, 'extends') and node.extends:
            parent_class = node.extends.name
        else:
            parent_class = None

        if(getattr(node, 'implements', [])!=None):
            # implements_interfaces = [interface.name for interface in getattr(node, 'implements', [])]
            for base_interface in getattr(node, 'implements', []):
                relationships.append({
                    'type': 'implements',
                    'source': {'type': 'class', 'name': class_name},
                    'target': {'type': 'interface', 'name': base_interface.name},
                    'linesOfCode': f"[{node.position[0]} - {node.position[1]}]",
                })

        
        else: 
            implements_interfaces=[]

        fields = []
        methods = []

        for member in node.body:
            if isinstance(member, javalang.tree.FieldDeclaration):
                access_modifier = ' '.join(modifier for modifier in member.modifiers)
                field_name = member.declarators[0].name
                fields.append({'name': field_name, 'access_modifier': access_modifier})

            elif isinstance(member, javalang.tree.MethodDeclaration):
                access_modifier = ' '.join(modifier for modifier in member.modifiers)
                method_name = member.name
                parameters = [(param.name, param.type.name) for param in member.parameters]
                methods.append({
                    'name': method_name,
                    'access_modifier': access_modifier,
                    'parameters': parameters,
                    'is_polymorphic': False,
                    'is_overridden': False,
                    'is_overloaded': False
                })

        entity_info = {
            'isClass': entity_type == 'class',
            'name': class_name,
            'attributes': fields,
            'methods': methods,
            'linesOfCode': f"[{node.position[0]} - {node.position[1]}]",
        }

        for method in entity_info['methods']:
            method_name = method['name']
            method_parameters = tuple(method['parameters'])
            method_signature = (method_name, method_parameters, class_name)

            for sig in polymorphic_methods:
                if method_name==sig[0] and parent_class==sig[2]:
                    method['is_polymorphic'] = True
                    method['is_overridden'] = True
                    source_function = {'type': 'function', 'name': f"{sig[2]}.{sig[0]}"}
                    target_function = {'type': 'function', 'name': f"{class_name}.{method_name}"}
                    lines_of_code = f"[{node.position[0]} - {node.position[1]}]"
                    relationships.append({
                        'type': 'polymorphism',
                        'source': source_function,
                        'target': target_function,
                        'linesOfCode': lines_of_code,
                    })
                    relationships.append({
                        'type': 'method overriding',
                        'source': source_function,
                        'target': target_function,
                        'linesOfCode': lines_of_code,
                    })


            else:
                polymorphic_methods.add(method_signature)
                if any(existing_sig[1] != method_parameters for existing_sig in polymorphic_methods):
                    method['is_overloaded'] = True

        entity_info_list.append(entity_info)


        for base_class in [parent_class]:
            if base_class:
                relationships.append({
                    'type': 'inheritance',
                    'source': {'type': 'class', 'name': class_name},
                    'target': {'type': 'class', 'name': base_class},
                    'linesOfCode': f"[{node.position[0]} - {node.position[1]}]",
                })

        for field in fields:
            if field['access_modifier'] == "private" or field['access_modifier'] == "protected":
                relationships.append({
                    'type': 'encapsulation',
                    'source': {'type': 'class', 'name': class_name},
                    'target': {'type': 'class', 'name': None},
                    'linesOfCode': f"[{node.position[0]} - {node.position[1]}]",
                })

        if is_abstract:
            relationships.append({
                'type': 'abstract class',
                'source': {'type': 'class', 'name': class_name},
                'target': {'type': 'class', 'name': None},
                'linesOfCode': f"[{node.position[0]} - {node.position[1]}]",
            })

    return entity_info_list, relationships

# Example Java code
java_code = """
public abstract class Animal {
    abstract void makeSound();
}

public interface Jumpable {
    void jump();
}

public class Dog extends Animal implements Jumpable {

    private String breed;
    void makeSound() {
        System.out.println("Woof! Woof!");
    }

    public void jump() {
        System.out.println("Jumping!");
    }
}

public class Cat extends Animal {

    private String furColour;
    void makeSound() {
        System.out.println("Meow!");
    }
}

public class Bird extends Animal {
    void makeSound(int s) {
        System.out.println("Chirp!");
    }
}"""



# Read the code from the command line arguments
if len(sys.argv) != 2:
    print("Usage: python analyseCodePython.py <code>")
    sys.exit(1)

code_to_analyze = sys.argv[1]

# Call the parseCode function with the provided code
results = parseCode(code_to_analyze)

# Construct JSON object
json_object = {
    'classes': results[0],
    'relationships': results[1],
}

# Convert the JSON object to a string and print it
json_string = json.dumps(json_object, indent=2)
print(json_string)

