/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, extract } = require('./utils');
const text = readFile('./app/Directions.xml');

const getItem = (e) => ({
  id: String(extract(e, /__title">(.+)<\/div>/)).replace(/\s+/g, '_').toLowerCase(),
  title: extract(e, /__title">(.+)<\/div>/),
  image: extract(e, /src="\/\/training.by\/Content\/images\/(.+?)"/),
});

const output = () => `export default ${JSON.stringify(text.split(/ngRepeat\:/).map(getItem), null, 2)}
;`;

console.log(output());
