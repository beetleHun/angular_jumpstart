import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author/author.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './pipe/summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCaseComponent } from './titlecase/titlecase.component';
import { TitlePipe } from './pipe/title.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    SummaryPipe,
    FavouriteComponent,
    TitleCaseComponent,
    TitlePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
