import { arrmatura } from 'arrmatura/core-web';

import types from './types';
import resources from './res';
import pipes from 'arrmatura/commons/pipes';

const functions = {
  ...pipes,
  translate: (x) => x,
  ChangeSpaces: (x) => x,
  MaxCharacters: (x) => x,
  keysOf: (x: any) => (x ? Object.keys(x) : null),
  valuesOf: (x: any) => (x ? Object.keys(x) : null),
};

arrmatura('<App/>', { rootElement: document.getElementById('root'), types, resources, functions });
