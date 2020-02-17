import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {SpriteViewer} from "./sprite-viewer.component";
import {SpriteController} from "./sprite-controller.component";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [SpriteViewer, SpriteController],
  providers: [],
  bootstrap: [SpriteController]
})
export class AppModule { }
