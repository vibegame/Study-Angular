import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"numword",
  pure:true,
})

export class NumwordPipe implements PipeTransform {

  transform(str:string, word1:string,word2:string,word5:string):string {
    const num = +str;
    let outputWord = word5;

    if(isNaN(num)) return `0 ${outputWord}`;
    const decades= num % 100;
    const units = num % 10;

    if ( !((decades>=11) && (decades<=19)) ) {
      if (units === 1) {
        outputWord = word1;
      } else if (units >= 2 && units <= 4) {
        outputWord = word2;
      }
    }


    return `${num} ${outputWord}`
  }

}
