import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTask',
  standalone: true
})
export class StatusTaskPipe implements PipeTransform {

  transform(value: number): string {
    switch(value) {
      case 0:
        return 'Activa';
      case 1:
        return 'Inactiva';
      default:
        return '';
    }
  }
}


