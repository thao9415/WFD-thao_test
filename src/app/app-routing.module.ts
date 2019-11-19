import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './books/home/home.component';
import {ListComponent} from './books/list/list.component';
import {AddComponent} from './books/add/add.component';
import {DetailComponent} from './books/detail/detail.component';
import {EditComponent} from './books/edit/edit.component';
import {DeleteComponent} from './books/delete/delete.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'list/detail/:id',
    component: DetailComponent
  },
  {
    path: 'list/edit/:id',
    component: EditComponent
  },
  {
    path: 'list/delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
