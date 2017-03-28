'use strict'

var csjs = require('csjs')
var insertCss = require('insert-css')
var assert = require('assert')

var cachedCss = {}

function wrappedCsjs () {
  var args = Array.prototype.slice.call(arguments)
  var result = csjs.apply(null, args)
  var css = csjs.getCss(result)
  if (process.browser) {
    console.log(css)
    insertCss(css)
  }
  addToCaches(css)
  return result
}

wrappedCsjs.startCache = startCache
wrappedCsjs.getCachedCss = getCachedCss
wrappedCsjs.flushCache = flushCache

module.exports = wrappedCsjs
module.exports.csjs = wrappedCsjs
module.exports.getCss = csjs

function startCache (cacheKey) {
  assert.equal(typeof cacheKey, 'string')
  cachedCss[cacheKey] = {}
}

function addToCaches (css) {
  var caches = Object.keys(cachedCss)
  if (!caches.length) return
  var hash = encode(hashStr(css))
  caches.forEach(function (cacheKey) {
    cachedCss[cacheKey][hash] = css
  })
}

function getCachedCss (cacheKey, flush) {
  assert.equal(typeof cacheKey, 'string')
  if (!cachedCss[cacheKey]) return

  var css = Object.keys(cachedCss[cacheKey]).reduce(function (p, v) {
    return p + cachedCss[cacheKey][v]
  }, '')
  if (flush) flushCache(cacheKey)
  return css
}

function flushCache (cacheKey) {
  if (cacheKey) return cachedCss[cacheKey] = {}
  cachedCss = {}
}

/**
 * base62 encode implementation based on base62 module:
 * https://github.com/andrew/base62.js
 */

var CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function encode (integer) {
  if (integer === 0) {
    return '0'
  }
  var str = ''
  while (integer > 0) {
    str = CHARS[integer % 62] + str
    integer = Math.floor(integer / 62)
  }
  return str
}

/**
 * djb2 string hash implementation based on string-hash module:
 * https://github.com/darkskyapp/string-hash
 */

function hashStr (str) {
  var hash = 5381
  var i = str.length

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i)
  }
  return hash >>> 0
}
