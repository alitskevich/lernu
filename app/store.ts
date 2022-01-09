import { objHasTruthyValue } from './utils';
import { arraySortBy } from 'arrmatura/lib';

export class Store {
  items: any;
  filteredItems: any;
  checkedCities: any;
  checkedCountries: any;
  checkedSkills: any;
  checkedTrainingTypes: any;
  sortedItems: any;
  sortBy: string = 'nearest';

  onSortByKey({ key = 'nearest' }) {
    return {
      sortedItems: null,
      sortBy: key,
    };
  }

  onCheckLocationCity({ value = false, key = '' }, { checkedCities = {} }) {
    return {
      filteredItems: null,
      checkedCities: {
        ...checkedCities,
        [key]: value,
      },
    };
  }

  onClearAllLocations() {
    return {
      filteredItems: null,
      checkedCountries: {},
      checkedCities: {},
    };
  }

  onCheckLocationCountry({ value = false, key = '' }, { checkedCountries = {} }) {
    return {
      filteredItems: null,
      checkedCountries: {
        ...checkedCountries,
        [key]: value,
      },
    };
  }

  onCheckSkill({ value = false, key = '' }, { checkedSkills = {} }) {
    return {
      filteredItems: null,
      checkedSkills: {
        ...checkedSkills,
        [key]: value,
      },
    };
  }

  onCheckTrainingType({ value = false, key = '' }, { checkedTrainingTypes = {} }) {
    return {
      checkedTrainingTypes: {
        ...checkedTrainingTypes,
        [key]: value,
      },
    };
  }

  getSortedItems() {
    if (!this.sortedItems) {
      this.sortedItems = arraySortBy(this.items, this.sortBy);
    }

    return this.sortedItems;
  }

  getFilteredItems() {
    if (!this.filteredItems) {
      this.filteredItems = this.getSortedItems();
      if (this.getHasCheckedCities()) {
        this.filteredItems = this.filteredItems.filter(
          ({ PlanLocations }) => !!PlanLocations?.find(({ CityId }) => !!this.checkedCities['' + CityId])
        );
      }
      if (this.getHasCheckedSkills()) {
        this.filteredItems = this.filteredItems.filter(({ MainSkillId }) => !!this.checkedSkills['' + MainSkillId]);
      }
    }

    return this.filteredItems;
  }

  getHasCheckedCities() {
    return objHasTruthyValue(this.checkedCities);
  }

  getHasCheckedCountries() {
    return objHasTruthyValue(this.checkedCountries);
  }

  getHasCheckedSkills() {
    return objHasTruthyValue(this.checkedSkills);
  }

  getHasCheckedTrainingTypes() {
    return objHasTruthyValue(this.checkedTrainingTypes);
  }

  getFilterInfo() {
    const { checkedCities = {}, checkedSkills = {}, checkedCountries = {}, sortBy } = this;

    const hasLocationsFilters = this.getHasCheckedCities() || this.getHasCheckedCountries();

    const hasFilters = hasLocationsFilters || objHasTruthyValue(checkedSkills);

    return {
      sortBy,

      hasFilters,
      hasLocationsFilters,

      checkedCities,
      checkedSkills,
      checkedCountries,
    };
  }

  getActualItems() {
    return this.getFilteredItems().slice(0, 12);
  }
}
