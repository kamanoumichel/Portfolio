import { Injectable } from "@angular/core";
import { of } from "rxjs";

export interface Project{
  title : string;
  description: string;
  technologies: string[];
  livreUrl?: string;
  codeUrl?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProjectService{
  private projects : Project[]=[
    {
      title:'RSE By Design',
      description:'Il s\'agit d\'une API penser pour intégrer une démarche RSE dès la conception d\'un site web.',
      technologies:['Node.js','Express','MySQL','REST API'],
      livreUrl:'https://nuitinfo.devops-office.com/rse/',
      codeUrl:'https://github.com/Nuit-de-l-info-1-0-ponible/rse_api'
    },
    {
      title:'Agro IA',
      description:'Il s\'agit d\'un projet de machine learning qui utilise des images de tomates pour prédire leur niveau de maturité.',
      technologies:['Python','TensorFlow','OpenCV'],
      livreUrl:'https://colab.research.google.com/drive/1RrSORiGo5etverL5xXvoNovkwWVqMLoc#scrollTo=4H512eFvaf1H',
      codeUrl:'https://github.com/Arsene666/agro_ia'
    },
    {
      title:'Amaba Discovery zone',
      description:'Il s\'agit d\'un Blog de découverte et d\'actualité réaliser dans un cadre académique.',
      technologies:['Django','Python','Bootstrap'],
      livreUrl:'https://amabadiscoveryzone.pythonanywhere.com/',
      codeUrl:'https://github.com/kamanoumichel/BlogDis'
    },
  ];
  getProjects(){
    return of(this.projects);
  }
}

