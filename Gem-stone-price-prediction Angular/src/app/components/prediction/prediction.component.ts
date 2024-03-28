import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { FlaskService } from '../../flask.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prediction',
  standalone: true,
  imports: [MatSlideToggleModule,MatInputModule,FormsModule,ReactiveFormsModule],
  templateUrl: './prediction.component.html',
  styleUrl: './prediction.component.css'
})
export class PredictionComponent {
  form!: FormGroup;

  constructor(private flaskService: FlaskService,
    private formBuilder: FormBuilder,
    private router: Router) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      carat: ['', Validators.required],
      cut: ['', Validators.required],
      color: ['', Validators.required],
      clarity: ['', Validators.required],
      depth: ['', Validators.required],
      table: ['', Validators.required],
      length: ['', Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.flaskService.predictDiamond(this.form.value).subscribe(
        (response) => {
          this.router.navigate(['/result'], { state: { prediction: response.prediction } });
         console.log('Prediction:', response.prediction);
        },
        (error) => {
          console.log('Error:', error);
        }
      );
      }
    }
}
