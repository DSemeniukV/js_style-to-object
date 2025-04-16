'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  const result = sourceString
    .split(';')
    .filter(Boolean)
    .map((item) => item.split(':'))
    .filter((tips) => tips.length === 2 && tips[0] && tips[1])
    .map((prop) => [prop[0].trim(), prop[1].trim()]);

  result.forEach(([key, value]) => (object[key] = value));

  return object;
}

module.exports = convertToObject;
