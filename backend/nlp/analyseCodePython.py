import ast
import json
import sys

def parseCode(code):
    classes = []
    relationships = []

    def get_class_lines(class_node):
        start_line, end_line = class_node.lineno, class_node.end_lineno
        return f"[{start_line} - {end_line}]"

    for node in ast.walk(ast.parse(code)):
        if isinstance(node, ast.Call):
            if isinstance(node.func, ast.Attribute) and isinstance(node.func.value, ast.Name):
                relationships.append({
                    'type': 'polymorphism',
                    'source': {'type': 'class', 'name': node.func.value.id},
                    'target': {'type': 'class', 'name': None},
                    'linesOfCode': f"[{node.lineno} - {node.end_lineno}]",
                })

        if isinstance(node, ast.ClassDef):
            class_info = {
                'isClass': True,
                'name': node.name,
                'attributes': [],
                'methods': [],
                'linesOfCode': get_class_lines(node),
            }

            for class_node in node.body:
                if isinstance(class_node, ast.FunctionDef):
                    if class_node.name == '__init__':
                        for i in range(1, len(class_node.args.args)):
                            attribute_name = class_node.args.args[i].arg
                            attribute_type = ''
                            class_info['attributes'].append({
                                'name': attribute_name,
                                'type': attribute_type,
                            })

                    method_info = {
                        'name': class_node.name,
                        'returnType': '',
                        'parameters': [{'name': arg.arg, 'type': ''} for arg in class_node.args.args],
                    }
                    if class_node.returns:
                        method_info['returnType'] = ast.get_source_segment(code, class_node.returns).strip()

                    for base_class_info in classes:
                        if class_info['name'] != base_class_info['name']:
                            for base_method in base_class_info['methods']:
                                if method_info['name'] == base_method['name'] and method_info['parameters'] == base_method['parameters']:
                                    relationships.append({
                                        'type': 'method overriding',
                                        'source': {'type': 'function', 'name': method_info['name']},
                                        'target': {'type': 'function', 'name': base_method['name']},
                                        'linesOfCode': get_class_lines(class_node),
                                    })

                    if method_info['name'] in [m['name'] for m in class_info['methods']]:
                        relationships.append({
                            'type': 'method overloading',
                            'source': {'type': 'function', 'name': method_info['name']},
                            'target': {'type': 'function', 'name': None},
                            'linesOfCode': get_class_lines(class_node),
    })

                    class_info['methods'].append(method_info)


            classes.append(class_info)

            for base_class in node.bases:
                relationships.append({
                    'type': 'inheritance',
                    'source': {'type': 'class', 'name': node.name},
                    'target': {'type': 'class', 'name': base_class.id if base_class.id else None},
                    'linesOfCode': get_class_lines(node),
                })

            for class_node in node.body:
                if isinstance(class_node, ast.FunctionDef):
                    if class_node.name == '__init__':
                        relationships.append({
                            'type': 'encapsulation',
                            'source': {'type': 'class', 'name': node.name},
                            'target': {'type': 'class', 'name': None},
                            'linesOfCode': get_class_lines(class_node),
                        })

                    elif class_node.name.startswith('_'):
                        relationships.append({
                            'type': 'encapsulation',
                            'source': {'type': 'class', 'name': node.name},
                            'target': {'type': 'class', 'name': None},
                            'linesOfCode': get_class_lines(class_node),
                        })

                    if class_node.decorator_list:
                        for decorator in class_node.decorator_list:
                            if isinstance(decorator, ast.Name) and decorator.id == 'abstractmethod':
                                relationships.append({
                                    'type': 'abstract class',
                                    'source': {'type': 'class', 'name': node.name},
                                    'target': {'type': 'class', 'name': None},
                                    'linesOfCode': get_class_lines(class_node),
                                })
    return classes, relationships

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