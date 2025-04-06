import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {
    path:'',
    component: TodoComponent
  },
  {
    path:'sample',
    component: SampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
