/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

/**
 *  Utils.
 */
function capitalize(x) {
  if (!x) {
    return '';
  }
  const s = `${x}`;

  return s[0].toUpperCase() + s.slice(1);
}

const camelize = (s, sep = '_') =>
  (s &&
    s.length &&
    s
      .split(sep)
      .map((t, i) => (i ? capitalize(t) : t))
      .join('')) ||
  '';

function onError(err) {
  if (err) return console.log(err);
}

const readFile = (f, c) => fs.readFileSync(f, { encoding: 'utf8' });
const writeFile = (f, c) => fs.writeFile(f, c.trim(), onError);

const walkSync = (d) =>
  fs.statSync(d).isDirectory() ? [].concat(...fs.readdirSync(d).map((f) => walkSync(path.join(d, f)))) : d;

const walkSubDir = (d, fn) => {
  if (fs.statSync(d).isDirectory()) {
    return fs.readdirSync(d).forEach((f) => (fs.statSync(path.join(d, f)).isDirectory() ? fn(path.join(d, f)) : null));
  }
};

const header = (s = '') =>
  `
/**
 * ${s}
 * Auto-generated file. Do not edit.
 * @vendor ${consts.vendorUrl}
 */
`.trim();

const JAVA_TYPES = {
  ref: 'String',
  date: 'Datetime',
};

const resolveJavaType = (t) => JAVA_TYPES[t] || 'String';

module.exports = {
  capitalize,
  camelize,
  readFile,
  writeFile,
  header,
  resolveJavaType,

  path,
  walkSync,
  walkSubDir,
  format: (s, ...args) => (s && s.length && s.replace(/\{(\d+)\}/g, (_, d) => args[+d] || '')) || '',
  snakeCase: (x) => (x || '').replace(/([a-z])([A-Z])/g, '$1_$2'),
  proper: (s) => capitalize(camelize(s)),
  extract: function (s, expr, subst) {
    var result = null;
    if (s) {
      String(s).replace(expr, function (_, s) {
        result = s || '';
      });
    }
    return result;
  },
};
