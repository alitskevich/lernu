/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, extract } = require('./utils');
const text = readFile('./tools/trainings.txt');

const getItem = (e) => ({
  id: extract(e, /<a href="\/#!\/Training\/(.+?)"/),
  title: extract(e, /<div class="training-item__title">(.+)<\/div>/),
  format: extract(e, /__format--(.+)">(.+)<\/span>/),
  price: extract(e, /__price">(.+)<\/span>/),
  image: extract(e, /src="\/Content\/images\/(.+?)"/),
  type: extract(e, /__info-type">(.+)<\/span>/),
  level: extract(e, /__info-level">(.+)<\/span>/),
  duration: extract(e, /__duration" ng-hide="isPlannedTraining\(\)">(.+)<\/div>/),
  location: extract(e, /__location--text" ng-if="!isShowLocationTooltip\(trainingItem\)">\s*(.+)\s*<\/span>/),
});

const output = () => `export default ${JSON.stringify(text.split(/ngRepeat\: itemTraining/).map(getItem), null, 2)}
;`;

console.log(output());
