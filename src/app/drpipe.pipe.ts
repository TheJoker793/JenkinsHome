import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drpipe'
})
export class DrpipePipe implements PipeTransform {

  transform(value: string): string {
    return "Dr. "+value;
  }

}
