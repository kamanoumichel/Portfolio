import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface EducationItem {
  title: string;
  localisation: string;
  period: string;
  school: string;
}



@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  education: EducationItem[] = [
    {
      title: 'Diplôme d\'ingénieur en Informatique',
      localisation: 'Calais, France',
      period: 'Depuis septembre 2024',
      school: 'Ecole d\'Ingénieurs du Littoral Côte d\'Opale'
    },{
      title: 'Diplôme d\'ingénieur en Cybersecurité et Investigation Numérique',
      localisation: 'Yaoundé, Cameroun',
      period: 'Septembre 2021 - Septembre 2024',
      school: 'Ecole Nationale Supérieure Polytechnique de Yaoundé'
    },  {
      title: 'Licence Professionnelle et BTS en Systèmes Informations',
      localisation: 'Yaoundé, Cameroun',
      period: 'Septembre 2019 - Septembre 2021',
      school: 'Institut Supérieur Hintel'
    }
  ];

}
