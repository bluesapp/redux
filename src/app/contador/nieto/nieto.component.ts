import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  contador$: Observable<number>;

  constructor(private store: Store<{ contador: number }>) {
    this.contador$ = store.pipe(select('contador'));
  }

  ngOnInit(): void {
  }

  reset() {
    this.store.dispatch(reset())
  }
}
