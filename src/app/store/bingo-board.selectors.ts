import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BingoBoardState, Block, BlockGroup } from '../models/bingo-board.models';

export const selectBingoBoardState = createFeatureSelector<BingoBoardState>('bingoBoard');

export const selectBlocks = createSelector(
  selectBingoBoardState,
  state => state ? state.blocks : null
);

export const selectGroupedBlocks = createSelector(
  selectBlocks,
  (blocks): BlockGroup[] => {
    if (!blocks) {
      return [];
    }

    return blocks.reduce((groups: BlockGroup[], block) => {
      const foundGroup = groups.find(group => group.category === block.category);

      if (!foundGroup) {
        groups.push({ category: block.category, blocks: [block] })
      } else {
        foundGroup.blocks.push(block);
      }

      return groups;
    }, []);
  }
)

export const selectLastCalledBlock = createSelector(
  selectBingoBoardState,
  state => state ? state.lastBlockCalled : null
);
