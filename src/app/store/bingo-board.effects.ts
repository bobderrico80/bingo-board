import { Injectable, makeStateKey } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { clearBoard, initializeGame, loadPersistedGame, toggleBlock } from './bingo-board.actions';
import { exhaustMap, map, mergeMap, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBingoBoardState } from './bingo-board.selectors';
import { BingoBoardState } from '../models/bingo-board.models';
import { initialState } from './bingo-board.reducer';

const LOCAL_STORAGE_KEY = 'bb__game-storage';

@Injectable()
export class BingoBoardEffects {
  persistGame$ = createEffect(() => {
    return this.actions.pipe(
      ofType(toggleBlock, clearBoard),
      exhaustMap(() => this.store.select(selectBingoBoardState)
        .pipe(
          tap((state) => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
          })
        ))
    )
  }, { dispatch: false })

  loadPersisted$ = createEffect(() => {
    return this.actions.pipe(
      ofType(initializeGame),
      map(() => {
        const stateJson = localStorage.getItem(LOCAL_STORAGE_KEY);
        const state: BingoBoardState = stateJson ? JSON.parse(stateJson) : initialState

        return loadPersistedGame({ gameState: state })
      })
    )
  })

  constructor(
    private readonly actions: Actions,
    private readonly store: Store
  ) {}
}
