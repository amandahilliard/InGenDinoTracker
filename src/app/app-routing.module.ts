import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JeepTableComponent } from './jeep-table/jeep-table.component';
import { DinoTableComponent } from './dino-table/dino-table.component';
import { LoginComponent } from './login/login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dinos', component: DinoTableComponent},
  {path: 'jeeps', component: JeepTableComponent},
  {path: 'user/:username', component: UserComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
