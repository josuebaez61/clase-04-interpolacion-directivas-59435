import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundedBlockDirective } from './shared/rounded-block.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, RoundedBlockDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
