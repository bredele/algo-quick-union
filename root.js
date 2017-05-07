
/**
 * Return index of the root node of a node in a tree.
 * 
 */

module.exports = function(ids, index) {
  while (index !== ids[index]) index = ids[index]
  return index
}
