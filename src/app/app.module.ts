import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [HeaderComponent, ContentComponent, FooterComponent, RootComponent],
  bootstrap: [RootComponent],
})
export class AppModule { }