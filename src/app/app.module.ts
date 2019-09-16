import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormsModule } from '@angular/forms';
import { searchPipe } from './data-table/search.pipe';
import { search1Pipe } from './data-table/search2.pipe';
import { search4Pipe } from './data-table/search4.pipe';
import { search3Pipe } from './data-table/search3.pipe';
import { ExampleComponent } from './example/example.component';
import { ParamsComponent } from './example/params/params.component';
import { PageOneComponent } from './example/params/page-one/page-one.component';
import { PageTwoComponent } from './example/params/page-two/page-two.component';
import { PageThreeComponent } from './example/params/page-three/page-three.component';
import { Task9Component } from './task9/task9.component';
import { Value1Component } from './task9/value1/value1.component';
import { Value2Component } from './task9/value2/value2.component';
import { Value3Component } from './task9/value3/value3.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataTableComponent,
    searchPipe,
    search1Pipe,
    search3Pipe,
    search4Pipe,
    ExampleComponent,
    ParamsComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    Task9Component,
    Value1Component,
    Value2Component,
    Value3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    FormsModule,
    MatButtonToggleModule,
    MatInputModule 

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
