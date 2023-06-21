import { createReducer, on } from '@ngrx/store';
import { clearBoard, loadPersistedGame, toggleBlock } from './bingo-board.actions';
import { BingoBoardState, Block, BlockCategory } from '../models/bingo-board.models';


const getInitialBlocksState = (): Block[] => {
  return [...Array(75).keys()].map(index => {
    const id = index + 1;
    let category: BlockCategory;

    if (id <= 15) {
      category = 'B';
    } else if (id > 15 && id <= 30) {
      category = 'I';
    } else if (id > 30 && id <= 45) {
      category = 'N';
    } else if (id > 45 && id <= 60) {
      category = 'G';
    } else {
      category = 'O';
    }

    return { id, category, isCalled: false };
  });
}

export const initialState: BingoBoardState = {
  blocks: getInitialBlocksState(),
  lastBlockCalled: null
};

export const bingoBoardReducer = createReducer(
  initialState,
  on(
    toggleBlock,
    (state, action) => {
      return {
        ...state,
        blocks: state.blocks.map((block => {
          if (block.id === action.blockId) {
            return {
              id: block.id,
              category: block.category,
              isCalled: !block.isCalled,
            }
          }

          return block;
        })),
        lastBlockCalled: action.blockId
      }
    }
  ),
  on(
    clearBoard,
    () => initialState
  ),
  on(
    loadPersistedGame,
    (_, action) => action.gameState
  )
)
