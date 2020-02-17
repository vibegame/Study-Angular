import {Component, Input, Output, EventEmitter} from "@angular/core";


@Component({
  moduleId: module.id,
  selector: 'sprite-viewer',
  templateUrl: 'sprite-viewer.component.html',
  styleUrls: ['sprite-viewer.component.css']
})
export class SpriteViewer {

  @Input('offset-x')
  public offsetX:number;
  @Input('offset-y')
  public offsetY:number;
  @Input('width')
  public width:number;
  @Input('height')
  public height:number;
  @Input('url')
  public url:string;
  @Output('clicked')
  public clicked = new EventEmitter<void>();

}
