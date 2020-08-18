import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, test: string): string {
    if(test.toLowerCase()=="male") {
       return "Mr. " + value
    }
   
    else  {
       return "Miss. " + value
    }
   
  }

}
