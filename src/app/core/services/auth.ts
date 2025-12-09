import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User, LoginRequest, RegisterRequest } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  login(loginData: LoginRequest): Observable<User> {
    // Имитация API вызова - в реальном проекте замените на реальный вызов
    return new Observable<User>(observer => {
      setTimeout(() => {
        const user: User = {
          id: 1,
          username: loginData.email.split('@')[0],
          email: loginData.email,
          firstName: 'Иван',
          lastName: 'Иванов',
          token: 'fake-jwt-token'
        };
        
        this.currentUserSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        observer.next(user);
        observer.complete();
      }, 1000);
    });
  }

  register(registerData: RegisterRequest): Observable<User> {
    return new Observable<User>(observer => {
      setTimeout(() => {
        const user: User = {
          id: 2,
          username: registerData.username,
          email: registerData.email,
          firstName: registerData.firstName,
          lastName: registerData.lastName,
          token: 'fake-jwt-token'
        };
        
        this.currentUserSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        observer.next(user);
        observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
}