/**
 * Dependencies.
 */

const root = require('tree-root')


/**
 * Find if two nodes are connected using quick-union
 * algorithm (2 nodes are connected if they have the same root).
 *
 * @param {Array} ids
 * @param {Number} q
 * @param {Number} q
 * @api public
 */

module.exports = function(ids, p, q) {
  return root(ids, p) === root(ids, q)
}
