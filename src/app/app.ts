import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, RouterOutlet, Footer]
})
export class App implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration:800,
      once:true,
      easing:'ease-out-cubic'
    });
  }
  //protected readonly title = signal('Portfolio');
}
