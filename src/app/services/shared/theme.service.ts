import { Injectable } from '@angular/core';
import { StorageService } from "./storage.service";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private storage: StorageService;
  private static THEME_DEFAULT: Theme = 'light';

  private readonly themeChangeSubject: Subject<Theme> = new BehaviorSubject(ThemeService.THEME_DEFAULT);
  readonly theme$: Observable<Theme> = this.themeChangeSubject.asObservable().pipe(distinctUntilChanged());
  theme: Theme = ThemeService.THEME_DEFAULT;

  constructor(private storageService: StorageService) {
    this.storage = this.storageService.open('theme');

    if (this.storage.get<Theme>('selected', 'light') === ThemeService.THEME_DEFAULT) {
      this.setLightTheme(false);
    } else {
      this.setDarkTheme(false);
    }
  }

  public setLightTheme(saveSelection = true): void {
    this.setTheme('light', saveSelection);
  }

  public setDarkTheme(saveSelection = true): void {
    this.setTheme('dark', saveSelection);
  }

  public setTheme(theme: Theme, saveSelection: boolean): void {
    const {classList} = document.body;
    classList.forEach((cls) => {
      if (cls.startsWith('theme-')) {
        document.body.classList.remove(cls);
      }
    });
    classList.add(`theme-${theme}`);
    this.themeChangeSubject.next(this.theme = theme);

    if(saveSelection) {
      this.storage.set<Theme>('selected', theme, ThemeService.THEME_DEFAULT);
    }
  }
}
