import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CobiInitService} from "./cobi-init.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initializeCobi, deps: [CobiInitService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function initializeCobi(cobiInitService: CobiInitService) {
  return (): Promise<void> => {
    return cobiInitService.initCobi();
  }
}
