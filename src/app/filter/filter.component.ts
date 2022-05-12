import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  productsForm!: FormGroup;

  constructor(public filter: FilterService) {}

  ngOnInit(): void {
    this.productsForm = new FormGroup({
      greaterThan500: new FormControl('', Validators.requiredTrue),
      lessThan500: new FormControl('', Validators.requiredTrue),
      greaterThan1000: new FormControl('', Validators.requiredTrue),
      oneStar: new FormControl('', Validators.requiredTrue),
      twoStars: new FormControl('', Validators.requiredTrue),
      threeStars: new FormControl('', Validators.requiredTrue),
      fourStars: new FormControl('', Validators.requiredTrue),
      fiveStars: new FormControl('', Validators.requiredTrue),
    });
  }
}
