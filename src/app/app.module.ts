import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { AuthGuard } from './guards/auth.guard';
import { PostService } from './services/post.service';
import { InterceptorService } from './services/interceptor.service';
import { UserService } from './services/user.service';
import { AboutComponent } from './home/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WildcardComponent } from './home/wildcard/wildcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    WildcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [
    RegisterService,
    PostService,
    AuthGuard,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
