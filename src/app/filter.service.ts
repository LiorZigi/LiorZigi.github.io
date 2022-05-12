import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  productsForm = new FormGroup({
    greaterThan500: new FormControl('', Validators.requiredTrue),
    lessThan500: new FormControl('', Validators.requiredTrue),
    greaterThan1000: new FormControl('', Validators.requiredTrue),
    oneStar: new FormControl('', Validators.requiredTrue),
    twoStars: new FormControl('', Validators.requiredTrue),
    threeStars: new FormControl('', Validators.requiredTrue),
    fourStars: new FormControl('', Validators.requiredTrue),
    fiveStars: new FormControl('', Validators.requiredTrue),
  });

  constructor() {}
}
