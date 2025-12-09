import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../blog-list/blog-list';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  post: BlogPost | null = null;
  isLoading: boolean = true;
  error: string = '';

  private mockPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Мой первый пост в блоге',
      excerpt: 'Это краткое описание моего первого поста в блоге...',
      content: `
        <h2>Введение</h2>
        <p>Это мой первый пост в этом блоге. Я очень рад поделиться с вами своими мыслями и идеями.</p>
        
        <h2>О чем этот блог?</h2>
        <p>Этот блог будет посвящен веб-разработке, Angular, React и другим современным технологиям.</p>
        
        <h2>Планы на будущее</h2>
        <p>В будущем я планирую писать о:</p>
        <ul>
          <li>Angular и лучших практиках</li>
          <li>React и его экосистеме</li>
          <li>TypeScript</li>
          <li>Веб-дизайне</li>
          <li>Производительности веб-приложений</li>
        </ul>
        
        <p>Спасибо, что читаете мой блог!</p>
      `,
      author: 'Иван Иванов',
      createdAt: new Date('2024-01-15')
    },
    {
      id: 2,
      title: 'Введение в Angular для начинающих',
      excerpt: 'Полное руководство по началу работы с Angular...',
      content: `
        <h2>Что такое Angular?</h2>
        <p>Angular - это платформа для построения мобильных и десктопных веб-приложений.</p>
        
        <h2>Основные концепции</h2>
        <h3>Компоненты</h3>
        <p>Компоненты - это основные строительные блоки Angular приложений.</p>
        
        <h3>Модули</h3>
        <p>Модули помогают организовать приложение в функциональные блоки.</p>
        
        <h3>Сервисы</h3>
        <p>Сервисы используются для разделения бизнес-логики.</p>
        
        <h3>Директивы</h3>
        <p>Директивы добавляют поведение элементам DOM.</p>
      `,
      author: 'Петр Петров',
      createdAt: new Date('2024-01-10')
    },
    {
      id: 3,
      title: 'Советы по TypeScript',
      excerpt: 'Лучшие практики и советы по использованию TypeScript...',
      content: `
        <h2>Преимущества TypeScript</h2>
        <p>TypeScript добавляет статическую типизацию к JavaScript.</p>
        
        <h2>Лучшие практики</h2>
        <p>Всегда используйте строгий режим и определяйте типы для функций.</p>
      `,
      author: 'Мария Сидорова',
      createdAt: new Date('2024-01-05')
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPost();
  }

  private loadPost(): void {
    this.isLoading = true;
    
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    
    setTimeout(() => {
      const foundPost = this.mockPosts.find(post => post.id === postId);
      
      if (foundPost) {
        this.post = foundPost;
      } else {
        this.error = 'Пост не найден';
      }
      
      this.isLoading = false;
    }, 500);
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

  sharePost(): void {
    if (navigator.share) {
      navigator.share({
        title: this.post?.title,
        text: this.post?.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Ссылка скопирована в буфер обмена!');
    }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}