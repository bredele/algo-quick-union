# algo-quick-union

[![Build Status](https://travis-ci.org/bredele/algo-quick-union.svg?branch=master)](https://travis-ci.org/bredele/algo-quick-union)
[![NPM](https://img.shields.io/npm/v/algo-quick-union.svg?style=flat-square)](https://www.npmjs.com/package/algo-quick-union)
[![Downloads](https://img.shields.io/npm/dm/algo-quick-union.svg?style=flat-square)](http://npm-stat.com/charts.html?package=algo-quick-union)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)

Quick union algorithm or so called lazy approach (avoid doing work until we have to) to resolve dynamic connectivity problems.

Nodes in the quick union algorithm are connected to their parent node, up to the root node (node that does not have a parent node). Two nodes are connected if they have the same root.
