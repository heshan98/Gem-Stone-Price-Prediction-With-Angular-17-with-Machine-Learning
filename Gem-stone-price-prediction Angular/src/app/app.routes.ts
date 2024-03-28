import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { PredictionComponent } from './components/prediction/prediction.component';
import { ResultComponent } from './components/result/result.component';

export const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  {path: 'prediction',component: PredictionComponent,} ,
 { path: 'result', component: ResultComponent }
];
