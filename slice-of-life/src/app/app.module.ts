import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './pages/feed/feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { SidebarComponent } from './UI/sidebar/sidebar.component';
import { PostComponent } from './UI/post/post.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FeedService } from './data/feed.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';

import {MatExpansionModule} from '@angular/material/expansion';
import { CommentComponent } from './UI/comment/comment.component';
import { PostService } from './data/post.service';
import { ThreadComponent } from './UI/thread/thread.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginService } from './data/login.service';
import { SignupService } from './data/signup.service';
import { HomeComponent } from './pages/home/home.component';
import { AlertComponent } from './UI/alert/alert.component';
import { IconComponent } from './UI/icon/icon.component';
import { JwtInterceptor } from './auth/jwt-interceptor.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthService } from './auth/auth.service';
import { TasklistComponent } from './UI/tasklist/tasklist.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import {MatTableModule} from '@angular/material/table';
import { NewPostComponent } from './pages/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    SidebarComponent,
    PostComponent,
    CommentComponent,
    ThreadComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AlertComponent,
    IconComponent,
    ProfileComponent,
    TasklistComponent,
    TaskPageComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
    
  ],
  providers: [FeedService, PostService, LoginService, SignupService, AuthService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
