import { Component, Input } from '@angular/core';
import { Block, BlockCategory } from '../../models/bingo-board.models';

@Component({
  selector: 'app-block-group',
  templateUrl: './block-group.component.html',
  styleUrls: ['./block-group.component.scss']
})
export class BlockGroupComponent {
  @Input() category?: BlockCategory;
  @Input() blocks: Block[] = [];
}
