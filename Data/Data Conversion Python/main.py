


from Node import Node


def main():
    counter = 0
    words = []
    tree = []
    file = open('treegraph-1.dot', 'r')
    data = file.readlines()

    for line in data:
        words.append(line.strip().split('\r\n'))

    for word in words:
        if counter > 0 and counter < len(words)-1:
            # print word
            # the line representing the root of the data
            if counter == 1 or counter % 2 == 0:
                value = word[0].strip().split(' ', 1)
                node = Node(value[0], value[1])
                tree.append(node)
            elif counter % 2 == 1:
                relation = word[0].split(' -> ')
                parent = int(relation[0])
                child = int(relation[1].split(' ')[0])
                tree[parent].children.append(tree[child])
        counter += 1

    output_file = open('flare.json', 'w')
    writeFile(output_file, tree[0], 1)


def writeFile(file, node, indent_count):
    file.write('{')
    file.write('\n')
    # write node number
    writeIndent(file, indent_count)
    file.write('"name": "' + node.name + '",')
    # write node info
    file.write('\n')
    writeIndent(file, indent_count)
    file.write('"info1": "' + node.info1 + '",')
    file.write('\n')
    writeIndent(file, indent_count)
    file.write('"info2": "' + node.info2 + '",')
    file.write('\n')
    writeIndent(file, indent_count)
    file.write('"info3": "' + node.info3 + '"')

    # check if there are children
    if(len(node.children) > 0):
        file.write(',')
        file.write('\n')
        writeIndent(file, indent_count)
        file.write('"children": [')
        for child in node.children:
            writeFile(file, child,  indent_count + 1)
            if not child == node.children[len(node.children)-1]:
                file.write(',')
        file.write(']')
    file.write('\n')
    writeIndent(file, indent_count)
    file.write('}')

def writeIndent(f, x):
    for i in range(x):
        f.write('   ')

if __name__ == "__main__":
    main()
