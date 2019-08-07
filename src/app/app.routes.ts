import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
    { path: '', pathMatch:"full", redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    { 
        path: 'protegida', 
        component: ProtegidaComponent,
        canActivate: [AuthGuard]
    },
    { path: 'callback', component: CallbackComponent},
    { path: '**', pathMatch:"full", redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
