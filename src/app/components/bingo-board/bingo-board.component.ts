import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectGroupedBlocks } from '../../store/bingo-board.selectors';
import { clearBoard, initializeGame } from '../../store/bingo-board.actions';
import { initialState } from '../../store/bingo-board.reducer';

@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.scss']
})
export class BingoBoardComponent implements OnInit {
  blockGroups$ = this.store.pipe(select(selectGroupedBlocks));

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(initializeGame())
  }

  onClearBoardClick() {
    if (confirm('Are you sure?')) {
      this.store.dispatch(clearBoard());
    }
  }
}
