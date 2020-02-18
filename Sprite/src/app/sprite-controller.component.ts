import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'sprite-controller',
  templateUrl: 'sprite-controller.component.html',
  styleUrls: ['sprite-controller.component.css']
})
export class SpriteController {

  public WIDTH:number = 140;
  public HEIGHT:number = 190;
  public URL:string = "http://fe.it-academy.by/Examples/cards2.png";

  public matrix:{x: number, y: number}[] = [];

  public card:number = 0;

  constructor() {
    this.createMatrix();
  }

  createMatrix():void {
    this.matrix = [];
    const START_GAP_X = 2;
    const START_GAP_Y = 1;
    const GAP_X = 4;
    const GAP_Y = 4;
    const COUNT_ROWS = 13;
    const COUNT_COLUMNS = 4;

    for(let indexRow:number = 0;indexRow < COUNT_ROWS;indexRow++) {
      for(let indexColumn:number = 0;indexColumn < COUNT_COLUMNS;indexColumn++) {
        this.matrix.push({
          x: START_GAP_X + indexColumn*this.WIDTH + indexColumn*GAP_X,
          y: START_GAP_Y + indexRow*this.HEIGHT + indexRow*GAP_Y,
        });
      }
    }

    const JOKER_BLACK = {
      x: 2,
      y: 2524
    };

    const JOKER_RED = {
      x: 290,
      y: 2524
    };
    this.matrix.push(JOKER_BLACK);
    this.matrix.push(JOKER_RED);
  }


  changeCard() {
    if(this.card === 53)
      this.card = 0;
    else
      this.card++;
  }
}
