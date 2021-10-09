"use strict";
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple utility function used to find an item in a set with a predicate
 * function.  Analagous to Array.find(), without requiring converting the set
 * an Array.
 */
function find(items, predicate) {
    for (const item of items) {
        if (predicate(item)) {
            return item;
        }
    }
}
exports.find = find;
/**
 * Converts string like `abc-xyz__omg` to `abcXyzOmg`.
 */
function camelCase(text) {
    return text.replace(/([a-z0-9])[^a-z0-9]+([a-z])/gi, (m) => m[0] + m[2].toUpperCase());
}
exports.camelCase = camelCase;
/**
 * Returns a set of unique/distinct values returned by calling the given
 * function on each item.
 */
function uniq(items, map) {
    const results = new Set();
    for (const item of items) {
        results.add(map(item));
    }
    return results;
}
exports.uniq = uniq;
/**
 * Returns a map of arrays of items, with keys generated by the keygen function.
 */
function partitionMap(items, keygen) {
    const map = new Map();
    for (const item of items) {
        const key = keygen(item);
        const partition = map.get(key) || [];
        if (!map.has(key)) {
            map.set(key, partition);
        }
        partition.push(item);
    }
    return map;
}
exports.partitionMap = partitionMap;
/**
 * Performs an in-place rewrite of a target object's properties from a given
 * replacement node.  This is useful because there are some transformations
 * of ASTs which simply require replacing a node, but it is not always
 * convenient to obtain the specific parent node property to which a node may be
 * attached out of many possible configurations.
 */
function rewriteObject(target, replacement) {
    // Strip all properties from target
    for (const key of Object.getOwnPropertyNames(target)) {
        if (!replacement.hasOwnProperty(key)) {
            delete target[key];
        }
    }
    // Transfer remaining properties from replacement
    for (const key of Object.getOwnPropertyNames(replacement)) {
        target[key] = replacement[key];
    }
}
exports.rewriteObject = rewriteObject;
/**
 * Generate a valid identifier name which is unique (i.e. does not appear
 * anywhere in the source text provided).  Do this by trying the provided
 * `value` and then successively trying the value with an incrementing suffix
 * counter until one is found that appears nowhere in the source.
 */
function generateUniqueIdentifierName(value, source) {
    let counter = 0, uniqueValue = value;
    while (source.includes(uniqueValue)) {
        uniqueValue = `${value}$${++counter}`;
    }
    return uniqueValue;
}
exports.generateUniqueIdentifierName = generateUniqueIdentifierName;
//# sourceMappingURL=utils.js.map