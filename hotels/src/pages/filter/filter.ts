import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ViewController, NavParams } from 'ionic-angular';

import { Filter } from '../../shared/interfaces/filter.interface';

@Component({
  selector: 'page-filter',
  templateUrl: './filter.html',
})
export class FilterPage implements OnInit {

  filterValues: Filter;
  form: FormGroup;

  constructor(
    private navParams: NavParams,
    public viewController: ViewController,
  ) { }

  ngOnInit() {
    this.filterValues = this.navParams.get('filterValues') || {};

    this.form = new FormGroup({
      from: new FormControl(this.filterValues.from || null, Validators.min(0)),
      to: new FormControl(this.filterValues.to || null, Validators.min(0)),
      parking: new FormControl(this.filterValues.parking || null),
    });
  }

  submitForm(): void {
    this.viewController.dismiss(this.form.value);
  }

  resetForm(): void {
    this.viewController.dismiss();
  }

  dismissModal(): void {
    this.viewController.dismiss(this.filterValues);
  }

  get fromControl(): AbstractControl {
    return this.form.get('from');
  }

  get toControl(): AbstractControl {
    return this.form.get('to');
  }
}
