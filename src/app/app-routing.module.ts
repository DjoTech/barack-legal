import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PublicCasesComponent} from "./public-cases/public-cases.component";
import {
  KepailitanPtKaisoMaritimGlobalDalamPailitComponent
} from "./kepailitan-pt-kaiso-maritim-global-dalam-pailit/kepailitan-pt-kaiso-maritim-global-dalam-pailit.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'public-cases',
    component: PublicCasesComponent,
  },
  {
    path: 'kepailitan-pt-kaiso-maritim-global-dalam-pailit',
    component: KepailitanPtKaisoMaritimGlobalDalamPailitComponent,
  },
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: ''},
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
