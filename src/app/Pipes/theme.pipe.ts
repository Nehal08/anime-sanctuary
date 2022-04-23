import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'theme'
})
export class ThemePipe implements PipeTransform {

  transform(theme: string): any {
    
    if(!theme) return "" ;

    let ele = theme.split(':')

    if(ele.length==1) return theme.trim()
    else  return ele[1].trim()

  }

}
