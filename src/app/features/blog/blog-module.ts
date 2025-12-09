import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BlogListComponent } from './pages/blog-list/blog-list';
import { BlogPostComponent } from './pages/blog-post/blog-post';
import { CreatePostComponent } from './pages/create-post/create-post';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogPostComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: BlogListComponent },
      { path: 'create', component: CreatePostComponent },
      { path: ':id', component: BlogPostComponent }
    ])
  ]
})
export class BlogModule { }