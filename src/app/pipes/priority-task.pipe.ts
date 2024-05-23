import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityTask',
  standalone: true
})
export class PriorityTaskPipe implements PipeTransform {

  transform(value: number): string {
    switch(value) {
      case 0:
        return 'Alta';
      case 1:
        return 'Media';
      case 2:
        return 'Baja';
      default:
        return '';
    }
  }

}
