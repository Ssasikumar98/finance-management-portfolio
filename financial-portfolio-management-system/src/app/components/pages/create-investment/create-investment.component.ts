import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-investment',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-investment.component.html',
  styleUrl: './create-investment.component.scss'
})
export class CreateInvestmentComponent implements OnInit {

  investmentForm!: FormGroup;
  isReviewing = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formInitializer();
  }

  formInitializer() {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      purchasePrice: [null, [Validators.required, Validators.min(0.01)]],
      purchaseDate: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.investmentForm.valid) {
      this.isReviewing = true;
    } else {
      this.investmentForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }

  confirmSubmission(): void {
    console.log('Form submitted:', this.investmentForm.value);
    this.investmentForm.reset();
    this.isReviewing = false;
  }
}
