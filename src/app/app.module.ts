import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { bingoBoardReducer } from './store/bingo-board.reducer';
import { BlockComponent } from './components/block/block.component';
import { BlockGroupComponent } from './components/block-group/block-group.component';
import { BingoBoardComponent } from './components/bingo-board/bingo-board.component';
import { BingoBoardEffects } from './store/bingo-board.effects';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    BlockGroupComponent,
    BingoBoardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ bingoBoard: bingoBoardReducer }),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    EffectsModule.forRoot([BingoBoardEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
