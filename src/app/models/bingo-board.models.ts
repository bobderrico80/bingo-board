export type BlockCategory = 'B' | 'I' | 'N' | 'G' | 'O';

export interface Block {
  id: number;
  category: BlockCategory;
  isCalled: boolean;
}

export interface BlockGroup {
  category: BlockCategory;
  blocks: Block[];
}

export interface BingoBoardState {
  blocks: Block[];
  lastBlockCalled: number | null;
}
