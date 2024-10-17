import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `<main>
    <header class="brand-name">
      <img src="logo.svg" alt="logo" class="brand-logo" aria-hidden="true">
    </header>
    <section class="content">
    <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes-app';
}
