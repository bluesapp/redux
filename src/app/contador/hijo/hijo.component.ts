import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { multiplicar, dividir } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador$: Observable<number>;

  constructor(private store: Store<{ contador: number }>) {
    this.contador$ = store.pipe(select('contador'));
  }

  ngOnInit(): void {
  }

  multiplicar() {
    this.store.dispatch(multiplicar({ numero: 2 }))
  }

  dividir() {
    this.store.dispatch(dividir({ numero: 2 }))
  }
}
