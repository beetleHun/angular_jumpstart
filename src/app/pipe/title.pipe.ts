import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(title: string): string {
    if (!title) {
      return null;
    }
    let parts = title.toLowerCase().split(' ');
    let processedParts: string[] = [];
    for (let i = 0; i < parts.length; i++) {
      if (i === 0 || (parts[i] !== 'the' && parts[i] !== 'of')) {
        processedParts.push(this.capitalize(parts[i]));
      } else {
        processedParts.push(parts[i]);
      }
    }
    return processedParts.join(' ');
  }

  private capitalize(word: string): string {
    let start = word.substr(0, 1).toUpperCase();
    let end = word.substr(1);
    return start + end;
  }

}
