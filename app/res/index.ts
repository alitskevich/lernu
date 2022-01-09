import catalog from '../data/catalog';
import skills from './skills';
import locations from './locations';
import enums from './enums';
const strings = {
  Register: 'Регистрация',
  Planned: 'запланировано',
};
export default {
  catalog,
  skills,
  locations,
  strings,
  top: {
    title: 'The Sample App',
  },
  form: [
    { id: 'subject', type: 'text', name: 'Subject' },
    { id: 'nextDate', type: 'date', name: 'Next date' },
    { id: 'status', type: 'text', name: 'Status', disabled: '!nextDate' },
    { id: 'notes', type: 'textarea', name: 'Notes', visible: 'status' },
  ],
  enums,
};
