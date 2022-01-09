import filtersTypes from './filters';

export default {
  filterTabs: [
    { id: 'Location', name: 'Локации', color: 'darkcyan', symbol: '🟢' },
    { id: 'Skill', name: 'Направления', color: 'darkorange', symbol: '🟠' },
    { id: 'TrainingType', name: 'Типы обучения', color: 'darkorange', symbol: '🟠' },
  ],
  trainingTypes: [
    { id: 'kind', name: 'Тип', items: filtersTypes.Types },
    { id: 'format', name: 'Формат', items: filtersTypes.Formats },
    { id: 'price', name: 'Стоимость', items: filtersTypes.PricingTypes },
    { id: 'language', name: 'Язык', items: filtersTypes.Languages },
    { id: 'level', name: 'Уровень', items: filtersTypes.Levels },
  ],
  status: [
    { id: 'open', name: 'Open', color: 'darkcyan', symbol: '🟢' },
    { id: 'closed', name: 'Closed', color: 'darkorange', symbol: '🟠' },
  ],
  sortByKeys: [
    { id: 'nearest', name: 'Ближайшие' },
    { id: 'planned', name: 'Запланированные' },
    { id: 'free', name: 'Online' },
  ],
};
