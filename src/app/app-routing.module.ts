import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { ExampleComponent } from './example/example.component';
import { ParamsComponent } from './example/params/params.component';
import { PageThreeComponent } from './example/params/page-three/page-three.component';
import { PageTwoComponent } from './example/params/page-two/page-two.component';
import { PageOneComponent } from './example/params/page-one/page-one.component';
import { Task9Component } from './task9/task9.component';



const routes: Routes = [
  {path: 'api', loadChildren:'./api/api.module#ApiModule'},
  {path: 'data', component: DataTableComponent},
  {path: 'task9', component: Task9Component},
  {path: 'example', component: ExampleComponent, children:[{ path: 'params', component: ParamsComponent, children:[
    {path: '1', component: PageOneComponent},
    {path: '2', component: PageTwoComponent},
    {path: '3', component: PageThreeComponent},
] }]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
