


class Node():

    def __init__(self, name, info):
        info_list = info.split('\\n')
        self.info1 = info_list[0].split('="', 1)[1]
        self.info2 = info_list[1]
        self.info3 = info_list[2].split('",')[0]
        self.children = []
        self.value = 0
        self.name  = name

    def setName(self, name):
        self.name = name

    def addChild(self, child):
        self.children.append(child)