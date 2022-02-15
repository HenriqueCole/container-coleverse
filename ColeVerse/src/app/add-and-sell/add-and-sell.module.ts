import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaAddAndSellComponent } from './tela-add-and-sell/tela-add-and-sell.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'telaAddAndSell',
    component: TelaAddAndSellComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [TelaAddAndSellComponent]
})
export class AddAndSellModule { }
