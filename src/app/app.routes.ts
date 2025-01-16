import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { QrCodeComponent } from './views/qr-code/qr-code.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'qr-code',component:QrCodeComponent}
];

