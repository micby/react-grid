/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

function shallowCloneObject(obj) {
  var result = {};
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      result[k] = obj[k];
    }
  }
  return result;
}

module.exports = shallowCloneObject;
