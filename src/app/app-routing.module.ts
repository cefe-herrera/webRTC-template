import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleCameraComponent } from './pages/simple-camera/simple-camera.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path:'',component:MainComponent, pathMatch:'full'},
  { path:'simpleCamera',component:SimpleCameraComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
