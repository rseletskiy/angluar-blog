import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { MainLaoutComponent } from './shared/components/main-laout/main-laout.component';

const routes: Routes = [
  {path: '', component: MainLaoutComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomePageComponent},
    {path: 'post/:id', component: PostPageComponent}
  ]},
  {
    path: 'admin', loadChildren: () => {
      return import('./admin/admin.module').then(m => m.AdminModule);
    }
  }
];
// 
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
