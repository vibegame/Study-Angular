import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {ViewApples} from "./viewApples.component";

import {NumwordPipe} from "./numword.pipe";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ ViewApples, NumwordPipe
  ],
  providers: [],
  bootstrap: [ViewApples]
})
export class AppModule { }
