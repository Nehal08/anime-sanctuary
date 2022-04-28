import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolToYes'
})
export class BoolToYesPipe implements PipeTransform {

  transform(item: any): any {
    if(item == null) return ''

    else if(item == true) return 'Yes'

    else if(item == false) return 'No'

  }

}
