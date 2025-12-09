import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth';
import { User } from '../../../../shared/models/user.model';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  createdAt: Date;
  imageUrl?: string;
}

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Мой первый пост в блоге',
      excerpt: 'Это краткое описание моего первого поста в блоге. Здесь я расскажу о своих планах и целях.',
      content: 'Полное содержание поста...',
      author: 'Иван Иванов',
      createdAt: new Date('2024-01-15')
    },
    {
      id: 2,
      title: 'Введение в Angular для начинающих',
      excerpt: 'Изучаем основы Angular framework. Этот пост поможет вам начать работу с одним из самых популярных фреймворков.',
      content: 'Angular - это мощный фреймворк...',
      author: 'Петр Петров',
      createdAt: new Date('2024-01-10')
    },
    {
      id: 3,
      title: 'Советы по TypeScript',
      excerpt: 'Лучшие практики и советы по использованию TypeScript в ваших проектах.',
      content: 'TypeScript добавляет типизацию...',
      author: 'Мария Сидорова',
      createdAt: new Date('2024-01-05')
    }
  ];

  currentUser: User | null = null;

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    console.log('BlogListComponent initialized');
  }
}