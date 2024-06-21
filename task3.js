// https://leetcode.com/problems/minimum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {

    if (root == null) {
        return 0
    }

    let l = minDepth(root.left)
    let r = minDepth(root.right)

    if (root.left == null) {
        return r + 1
    }

    if (root.right == null) {
        return l + 1
    }

    return l < r ? l + 1 : r + 1
};