# Definition for a binary tree node.

class TreeNode(object):
    def __init__(self, x, left = None, right = None):
        self.val = x
        self.left = left
        self.right = right

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if not root:
            return "[]"
        queue = [root]
        res = '['+ str(root.val) +','
        while queue:
            n = queue[0]
            if n.left:
                queue.append(n.left)
                res += str(n.left.val) + ','
            else:
                res += 'None,'
            if n.right:
                queue.append(n.right)
                res += str(n.right.val) + ','
            else:
                res += 'None,'
            queue.pop(0)
        print(res[:-1]+']')
        return res[:-1]+']'
        

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        

# Your Codec object will be instantiated and called as such:
root = TreeNode(1,TreeNode(2),TreeNode(3,TreeNode(4),TreeNode(5)))
codec = Codec()
codec.deserialize(codec.serialize(root))

class Solution:
    def xxx(self, n):
        return n


if __name__ == '__main__':
    test_cases = [TreeNode(1,TreeNode(2,None,TreeNode(3)),TreeNode(2,None,TreeNode(3)))]
    for case in test_cases:
        ans = Solution().xxx(case)
        print(ans)
