import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CropComponent } from './crop/crop.component';
import { ProducerComponent } from './producer/producer.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'crop', component: CropComponent},
    { path: 'producer', component: ProducerComponent }
];
