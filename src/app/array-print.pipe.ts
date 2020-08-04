import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayPrint'
})
export class ArrayPrintPipe implements PipeTransform {

  transform(value: unknown[], args?: unknown[]): unknown {
    console.log(value);
    const res: any[] = [];

    for (const user of value) {
      for (const key in user){
        console.log(typeof user[key]);
        if (typeof user[key] !== 'object'){
          res.push(`${key}: ${user[key]}`);
        }
        else {
          for (const keyObj in user[key]) {
            res.push(`${keyObj}: ${user[key][keyObj]}`);
          }
        }
      }
    }

    return res;
  }

}
