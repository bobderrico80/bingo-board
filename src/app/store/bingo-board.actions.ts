import { createAction, props } from '@ngrx/store';
import { BingoBoardState } from '../models/bingo-board.models';

export const initializeGame = createAction('[Bingo Board] Initialize Game');

export const toggleBlock = createAction(
  '[Bingo Board] Toggle Block',
  props<{ blockId: number }>()
);
export const clearBoard = createAction('[Bingo Board] Clear Board');

export const loadPersistedGame = createAction(
  '[Bingo Board] Load Persisted Game',
  props < { gameState: BingoBoardState }>()
);
