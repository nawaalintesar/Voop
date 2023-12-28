import javalang

def detect_oop_concepts(java_code):
    relationships = {
        'inheritance': [],
        'abstraction': [],
        'encapsulation': [],
        'polymorphism': [],
        'method overriding': [],
        'method overloading': [],
        'abstract class': [],
        'interface': []
    }
    entity_info_list = []

    # Parse Java code
    tree = javalang.parse.parse(java_code)

    polymorphic_methods = set()

    for path, node in tree:
        # Check if the node is a class declaration or interface declaration
        if isinstance(node, javalang.tree.ClassDeclaration):
            entity_type = 'class'
        elif isinstance(node, javalang.tree.InterfaceDeclaration):
            entity_type = 'interface'
        else:
            continue  # Skip if not a class or interface

        class_name = node.name
        is_abstract = any(modifier == 'abstract' for modifier in node.modifiers)

        # Check if the class or interface has a superclass or superinterface (indicating inheritance)
        if hasattr(node, 'extends') and node.extends:
            parent_class = node.extends.name
        else:
            parent_class = None

        # Check if the class or interface implements interfaces
        if(getattr(node, 'implements', [])!=None):
            implements_interfaces = [interface.name for interface in getattr(node, 'implements', [])]
        else: 
            implements_interfaces=[]
        # Initialize lists to store information about fields and methods
        fields = []
        methods = []

        for member in node.body:
            # Check if the class member is a field
            if isinstance(member, javalang.tree.FieldDeclaration):
                access_modifier = ' '.join(modifier for modifier in member.modifiers)
                field_name = member.declarators[0].name
                fields.append({'name': field_name, 'access_modifier': access_modifier})

            # Check if the class member is a method
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

        entity_info = {
            'Entity': entity_type,
            'class_name': class_name,
            'is_abstract': is_abstract,
            'parent_class': parent_class,
            'implements_interfaces': implements_interfaces,
            'fields': fields,
            'methods': methods
        }

        # Check if the class or interface is abstract or has a parent class or interface
        if entity_info['is_abstract'] or entity_info['parent_class']:
            # Iterate through methods of the class or interface
            method_names_set = set()

            for method in entity_info['methods']:
                method_name = method['name']
                method_parameters = tuple(method['parameters'])
                method_signature = (method_name, method_parameters)

                # Check if the method name exists in method_names_set
                if method_name in [sig[0] for sig in polymorphic_methods]:
                    method['is_polymorphic'] = True
                    method['is_overridden'] = True
                else:
                    polymorphic_methods.add(method_signature)
                    # Check if the method signature matches any of the stored signatures
                    if any(existing_sig[1] != method_parameters for existing_sig in polymorphic_methods):
                        method['is_overloaded'] = True
                    else:
                        method_names_set.add(method_name)

        entity_info_list.append(entity_info)

    return entity_info_list

# Example Java code
java_code1 = """
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

# Detect classes and interfaces in Java code
result = detect_oop_concepts(java_code1)
classes = [entity_info for entity_info in result if entity_info['Entity'] == 'class']
interfaces = [entity_info for entity_info in result if entity_info['Entity'] == 'interface']

print("Classes:")
for class_info in classes:
    print(f"\nClass: {class_info['class_name']}, Abstract: {class_info['is_abstract']}, Parent: {class_info['parent_class']}")
    print("Implements Interfaces:", class_info['implements_interfaces'])
    print("Fields:")
    for field in class_info['fields']:
        print(f"  - {field['access_modifier']} {field['name']}")
        if field['access_modifier'] == "private" or field['access_modifier'] == "protected":
            print("[Encapsulated]")

    print("Methods:")
    for method in class_info['methods']:
        print(f"  - {method['access_modifier']} {method['name']}")
        if method['is_polymorphic']:
            print("[Polymorphic]")
            print()
        if method['is_overridden']:
            print("[Method Overriding]")
            print()

        if method['is_overloaded']:
            print("[Method Overloading]")
            print()

        else:
            print()

print("\nInterfaces:")
for interface_info in interfaces:
    print(f"\nInterface: {interface_info['class_name']}, Abstract: {interface_info['is_abstract']}")
    print("Methods:")
    for method in interface_info['methods']:
        print(f"  - {method['access_modifier']} {method['name']}")
        if method['is_polymorphic']:
            print("[Polymorphic]")
            print()
        if method['is_overridden']:
            print("[Method Overriding]")
            print()

        if method['is_overloaded']:
            print("[Method Overloading]")
            print()

        else:
            print()