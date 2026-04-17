import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languauges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languauges.html',
  styleUrl: './languauges.css',
})
export class Languauges implements AfterViewInit {
  langues = [
    { flag: '🇫🇷', nom: 'Français', niveau: 'Natif',   pourcentage: 100, couleur: 'linear-gradient(90deg,#4f46e5,#6366f1)' },
    { flag: '🇬🇧', nom: 'Anglais',  niveau: 'Courant',  pourcentage: 80,  couleur: 'linear-gradient(90deg,#10b981,#34d399)' },
    { flag: '🇪🇸', nom: 'Espagnol', niveau: 'Notions',  pourcentage: 40,  couleur: 'linear-gradient(90deg,#f59e0b,#fbbf24)' },
  ];

  languesVisible = false;

  ngAfterViewInit() {
    setTimeout(() => (this.languesVisible = true), 100);
  }
}