/**
 * Tests dependencies.
 */

const array = require('array-ids')
const test = require('tape')
const union = require('../union')
const find = require('../find')
const algo = require('..')

test('should union two nodes given their ids', assert => {
  assert.plan(1)
  const ids = array(6)
  union(ids, 4, 3)
  assert.deepEqual(ids, [0, 1, 2, 3, 3, 5])
})
