import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses/courses.component';
import {CoursesService} from './courses/courses.service';
import {AuthorComponent} from './author/author.component';
import {AuthorService} from './author/author.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SummaryPipe} from './pipe/summary.pipe';
import {FavouriteComponent} from './favourite/favourite.component';
import {TitleCaseComponent} from './titlecase/titlecase.component';
import {TitlePipe} from './pipe/title.pipe';
import {PanelComponent} from './panel/panel.component';
import {LikeComponent} from './like/like.component';
import {InputFormatDirective} from './input-format.directive';
import {ZippyComponent} from './zippy/zippy.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {CourseFormComponent} from './course-form/course-form';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {NewCourseFormComponent} from './new-course-form/new-course-form.component';
import {PasswordChangeFormComponent} from './password-change-form/password-change-form.component';
import {PostComponent} from './post/post.component';
import {HttpModule} from '@angular/http';
import {PostService} from './post/post.service';
import {AppErrorHandler} from './common/app-error-handler';
import {FollowersComponent} from './followers/followers.component';
import {FollowersService} from './followers/followers.service';
import {HomeComponent} from './home/home.component';
import {GithubComponent} from './github/github.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';

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
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PasswordChangeFormComponent,
    PostComponent,
    FollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'followers/:id/:username', component: GithubComponent},
        {path: 'followers', component: FollowersComponent},
        {path: 'posts', component: PostComponent},
        {path: '**', component: NotfoundComponent}
      ]
    )
  ],
  providers: [
    CoursesService,
    AuthorService,
    PostService,
    FollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
