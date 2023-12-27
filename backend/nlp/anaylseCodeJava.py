import javalang
import json
def parseJavaCode(java_code):
    classes = []
    relationships = {
        'inheritance': [],
        'encapsulation': [],
        'polymorphism': [],
        'method overriding': [],
        'method overloading': [],
        'abstract class': [],
        'interface':[]
    }

    def get_class_lines(class_node):
        start_line, end_line = class_node.position[0], class_node.position[1]
        return f"[{start_line} - {end_line}]"

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

        if getattr(node, 'implements', []):
            implements_interfaces = [interface.name for interface in getattr(node, 'implements', [])]
        else:
            implements_interfaces = []

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
                parameters = [param.type.name for param in member.parameters]
                methods.append({
                    'name': method_name,
                    'access_modifier': access_modifier,
                    'parameters': parameters,
                    'is_polymorphic': False,
                    'is_overridden': False,
                    'is_overloaded': False
                })

        class_info = {
            'isClass': True,
            'name': class_name,
            'attributes': fields,
            'methods': methods,
            'linesOfCode': get_class_lines(node),
        }

        for method in class_info['methods']:
            method_name = method['name']
            method_parameters = tuple(method['parameters'])
            method_signature = (method_name, method_parameters)

            if method_name in [sig[0] for sig in polymorphic_methods]:
                method['is_polymorphic'] = True
                method['is_overridden'] = True
            else:
                polymorphic_methods.add(method_signature)
                if any(existing_sig[1] != method_parameters for existing_sig in polymorphic_methods):
                    method['is_overloaded'] = True

        classes.append(class_info)

        # for base_interface in getattr(node, 'implements', []):
        #     relationships['inheritance'].append({
        #         'type': 'inheritance',
        #         'source': {'type': 'class', 'name': class_name},
        #         'target': {'type': 'interface', 'name': base_interface.name},
        #         'linesOfCode': get_class_lines(node),
        #     })

        for field in fields:
            if field['access_modifier'] == "private" or field['access_modifier'] == "protected":
                relationships['encapsulation'].append({
                    'type': 'encapsulation',
                    'source': {'type': 'class', 'name': class_name},
                    'target': {'type': 'class', 'name': None},
                    'linesOfCode': get_class_lines(node),
                })

        if is_abstract:
            relationships['abstract class'].append({
                'type': 'abstract class',
                'source': {'type': 'class', 'name': class_name},
                'target': {'type': 'class', 'name': None},
                'linesOfCode': get_class_lines(node),
            })

    json_object = {
        'classes': classes,
        'relationships': relationships,
    }
    return classes, relationships

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
}
"""

# Call the parseJavaCode function with the provided code
results = parseJavaCode(java_code)

# Construct JSON object
json_object = {
    'classes': results[0],
    'relationships': results[1],
}

# Convert the JSON object to a string and print it
json_string = json.dumps(json_object, indent=2)
print(json_string)
