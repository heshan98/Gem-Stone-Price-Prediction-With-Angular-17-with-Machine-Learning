import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { PredictionComponent } from './components/prediction/prediction.component';

export const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  {path: 'prediction',
  component: PredictionComponent,} ,
];
