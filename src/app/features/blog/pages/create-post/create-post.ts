import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      excerpt: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', [Validators.required, Validators.minLength(50)]]
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      console.log('Создание поста:', this.postForm.value);
      alert('Пост успешно создан!');
      this.router.navigate(['/blog']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/blog']);
  }
}