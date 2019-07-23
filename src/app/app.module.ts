import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonalStatementComponent } from './personal-statement/personal-statement.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ProjectsLinkComponent } from './projects-link/projects-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalStatementComponent,
    CanvasComponent,
    ProjectsLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
