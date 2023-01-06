import { Pipe, PipeTransform } from '@angular/core';
import { Monster } from '../models/monster';

@Pipe({
  name: 'filterMonsters'
})
export class FilterMonstersPipe implements PipeTransform {

  transform(items: Monster[], searchText: string): Monster[] {
    if (!items) return [];
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      if (item && item.name) {
        return item.name.toLowerCase().includes(searchText);
      }
      return false;
    });
  }

}
