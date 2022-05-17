import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './component/message/message.component';
import { SujetComponent } from './component/sujet/sujet.component';

const routes: Routes = [
  { path : "sujets", component : SujetComponent},
  { path : "messages/:id", component : MessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
