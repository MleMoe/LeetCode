# from helpers.py.tree_node import Node

# Definition for a Node.
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# from  helpers.py.node import Node
class Solution:
    def treeToDoublyList(self, root: 'Node') -> 'Node':
        if not root:
            return root
        nodeList = []
        def in_order(n: 'Node'):
            if not n:
                return None
            in_order(n.left)
            nodeList.append(n)
            in_order(n.right)
        in_order(root)

        head = nodeList[0]
        for i, n in enumerate(nodeList):
            n.left = nodeList[i-1] if i>0 else nodeList[-1]
            n.right = nodeList[i+1] if i < len(nodeList)-1 else head

        return head


if __name__ == '__main__':
    test_cases = [Node(4, Node(2,Node(1),Node(3)),Node(5,None))]
    for case in test_cases:
        ans = Solution().treeToDoublyList(case)
        print(ans)
