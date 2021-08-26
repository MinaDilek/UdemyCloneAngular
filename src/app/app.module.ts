import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { MiddleComponent } from './middle/middle.component';
import { MiddleTextComponent } from './middle-text/middle-text.component';
import { CategoryComponent } from './category/category.component';
import { MdtextComponent } from './mdtext/mdtext.component';
import { Category2Component } from './category2/category2.component';
import { BottomComponent } from './bottom/bottom.component';
import { BottomcategoryComponent } from './bottomcategory/bottomcategory.component';
import { BottomendComponent } from './bottomend/bottomend.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    MiddleComponent,
    MiddleTextComponent,
    CategoryComponent,
    MdtextComponent,
    Category2Component,
    BottomComponent,
    BottomcategoryComponent,
    BottomendComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
