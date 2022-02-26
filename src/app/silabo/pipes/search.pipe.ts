import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    lista: any[],
    keyword: string,
    text: string,
    ...args: unknown[]
  ): unknown {
    if (!text) return lista;
    return lista.filter((item) =>
      item['curso'][keyword].toUpperCase().includes(text.toUpperCase())
    );
  }
}
