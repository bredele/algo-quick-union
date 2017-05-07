/**
 * Dependencies.
 */

const root = require('tree-root')


/**
 * Union algorithm following quick-union method.
 *
 * @param {Array} ids
 * @param {Number} p
 * @param {Number} q
 * @api public
 */

module.exports = function(ids, p, q) {
  ids[root(ids, p)] = root(ids, q)
}
