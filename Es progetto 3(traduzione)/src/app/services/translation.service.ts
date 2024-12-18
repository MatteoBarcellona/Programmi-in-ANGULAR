import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<string>('it');
  private translations = new BehaviorSubject<any>({});
  
  constructor(private http: HttpClient) {
    this.loadTranslations('it');  // Default language is Italian
  }

  changeLanguage(language: string): void {
    this.loadTranslations(language);
    this.currentLanguage.next(language);
  }

  getTranslations() {
    return this.translations.asObservable();
  }

  private loadTranslations(language: string): void {
    this.http.get(`/assets/i18n/${language}.json`).subscribe(
      (translations) => {
        this.translations.next(translations);
      },
      (error) => {
        console.error('Error loading translations', error);
      }
    );
  }
}
