import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PredictionComponent } from '../prediction/prediction.component';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [PredictionComponent],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {

      this.router.navigate(['/prediction']); 
    }, 3000);
  }
}
