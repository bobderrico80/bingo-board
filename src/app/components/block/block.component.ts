import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { toggleBlock } from '../../store/bingo-board.actions';
import { selectLastCalledBlock } from '../../store/bingo-board.selectors';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {
  @Input() blockId?: number;
  @Input() isCalled: boolean = false;

  isLastCalled$ = this.store.pipe(
    select(selectLastCalledBlock),
    filter(blockId => blockId !== null),
    map(blockId => this.isCalled && blockId === this.blockId)
  );

  constructor(private readonly store: Store) {}

  onBlockClick() {
    if (this.blockId) {
      this.store.dispatch(toggleBlock({ blockId: this.blockId }))
    }
  }
}
