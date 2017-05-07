/**
 * Dependencies.
 */

const union = require('./union')
const find = require('./find')


/**
 * Resolve dynamic connectivity using quick find algorithm.
 *
 * Examples:
 *
 *  const algo = quickFind([0, 1, 2, 3])
 *  algo.connected(1, 2)
 *  // => false
 *  algo.union(1, 2)
 *  algo.connected(1, 2)
 *  // => true
 *
 * @param {Array} ids
 * @return {Object}
 * @api public
 */

module.exports = function(ids) {
  return {
    connected : find.bind(null, ids),
    union: union.bind(null, ids)
  }
}
