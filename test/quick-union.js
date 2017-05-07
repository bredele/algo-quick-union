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


test('should union one node with an other one that belong to a component', assert => {
  assert.plan(1)
  const ids = array(10)
  union(ids, 4, 3)
  union(ids, 3, 8)
  assert.deepEqual(ids, [0, 1, 2, 8, 3, 5, 6, 7, 8, 9])
})

test('should find two connect nodes', assert => {
  assert.plan(2)
  const ids = array(10)
  union(ids, 4, 3)
  union(ids, 3, 8)
  assert.equal(find(ids, 8, 9), false)
  union(ids, 9, 4)
  assert.equal(find(ids, 8, 9), true)
})

test('test quick unio api', assert => {
  assert.plan(2)
  const quickUnion = algo(array(4))
  assert.equal(quickUnion.connected(1, 2), false)
  quickUnion.union(1, 2)
  assert.equal(quickUnion.connected(1, 2), true)
})
