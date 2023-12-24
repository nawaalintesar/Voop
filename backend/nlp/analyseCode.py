import ast

def extract_classes_and_members(code, language=''):
    classes = []

    if language == 'python':
        tree = ast.parse(code)
        oop_concepts = {
            'inheritance': [],
            'abstraction': [],
            'encapsulation': [],
            'polymorphism': [],
            'method overriding': [],
            'method overloading': [],
            'abstract class': [],
        }
        for node in ast.walk(tree):
            if isinstance(node, ast.Call):
                # Check if the call is made on an attribute of a Name (variable)
                if isinstance(node.func, ast.Attribute) and isinstance(node.func.value, ast.Name):
                    oop_concepts['polymorphism'].append({
                        'object_type': node.func.value.id,
                        'method': node.func.attr,
                        'arguments': [arg.id for arg in node.args] if node.args else [],
                    })
            if isinstance(node, ast.ClassDef):
                class_info = {'class_name':  node.name, 'attributes': [], 'methods': []}

                if node.bases:
                    for base_class in node.bases:
                        oop_concepts['inheritance'].append({'class': class_info['class_name'], 'inherits_from': base_class.id if base_class.id else None})

                for class_node in node.body:
                    if isinstance(class_node, ast.FunctionDef):
                        if class_node.name == '__init__':
                            oop_concepts['encapsulation'].append({'present': True, 'class': class_info['class_name']})
                        elif class_node.name.startswith('_'):
                            oop_concepts['encapsulation'].append({'present': True, 'class': class_info['class_name']})

                        if class_node.decorator_list:
                            for decorator in class_node.decorator_list:
                                if isinstance(decorator, ast.Name) and decorator.id == 'abstractmethod':
                                    oop_concepts['abstract class'].append({'present': True, 'class': class_info['class_name']})
                                elif isinstance(decorator, ast.Attribute) and decorator.attr == 'abstractmethod':
                                    oop_concepts['abstract class'].append({'present': True, 'class': class_info['class_name']})

                        
                for member in node.body:
                    if isinstance(member, ast.FunctionDef):
                        if member.name == '__init__':
                            for i in range (1,len(member.args.args)):
                                class_info['attributes'].append(member.args.args[i].arg)

                        method_info = {'name': member.name, 'parameters': []}

                        for parameter in member.args.args:
                            method_info['parameters'].append(parameter.arg)

                        for base_class_info in classes:
                            if class_info['class_name'] != base_class_info['class_name']:
                                for base_method in base_class_info['methods']:
                                    if method_info['name'] == base_method['name'] and method_info['parameters'] == base_method['parameters']:
                                        # Check if the overriding information is not already present
                                        if {'present': True, 'class': class_info['class_name'], 'method': method_info['name']} not in oop_concepts['method overriding']:
                                            oop_concepts['method overriding'].append({'present': True, 'class': class_info['class_name'], 'method': method_info['name']})

                        if method_info['name'] in [m['name'] for m in class_info['methods']]:
                            oop_concepts['method overloading'].append({'present': True, 'class': class_info['class_name'], 'method': method_info['name']})
                        class_info['methods'].append(method_info)

                classes.append(class_info.copy())
    return classes, oop_concepts

python_code = """
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass
        
class MyClass:
    def test(self, param1):
        print(f"Method with one parameter: {param1}")

    def test(self, param1, param2):
        print(f"Method with two parameters: {param1}, {param2}")

class Cat(Animal):
    def __init__(self, name, color):
        # Call the __init__ method of the parent class (Animal) to initialize the name attribute
        super().__init__(name)
        # Add a new attribute specific to the Cat class
        self.color = color

    def speak(self):
        return "Meow!"

class Dog(Animal):
    def speak(self):
        return "Woof!"

class test():
    def __init__(self, asdf):
        self.asdf = asdf
    def speak(self):
        return "Woof!"

class AbstractExample(ABC):
    @abstractmethod
    def abstract_method(self):
        pass
        
cat_instance = Cat("Whiskers", "Brown")
dog_instance = Dog("Buddy")

animal_instances = [cat_instance, dog_instance]

for animal in animal_instances:
    print(animal.speak())  

"""

# Store the results in the same array
results = []

# Extract classes, attributes, and methods for Python code
result_python, oop_concepts = extract_classes_and_members(python_code, language='python')
results.extend(result_python)


# Print the combined results
for result in results:
    print(f"\nClass: {result['class_name']}")
    print("Attributes:", result['attributes'])
    print("Methods:")
    for method_info in result['methods']:
        print(f"  - {method_info['name']}({', '.join(method_info['parameters'])})")

# Print OOP concepts
print("\nOOP Concepts:")
for concept, instances in oop_concepts.items():
    if instances:
        print(f"\n{concept.capitalize()} Information:")
        for instance in instances:
            if concept == 'polymorphism' and 'source' in instance and 'target' in instance:
                print(f"Object Type: {instance['source']}, Target: {instance['target']}")
            else:
                print(instance)

