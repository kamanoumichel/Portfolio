import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill{
  name: string;
  iconClass: string;
  level: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills: Skill[]=[
    {name:'Angular',iconClass:'fa-brands fa-angular',level:'Intermediare'},
    {name:'TypeScript',iconClass:'fa-solid fa-file-code',level:'Intermediare'},
    {name:'JavaScript',iconClass:'fa-brands fa-js',level:'Intermediare'},
    {name:'HTML & CSS',iconClass:'fa-solid fa-code',level:'Intermediare'},
    {name:'Java',iconClass:'fa-brands fa-java',level:'Intermediare'},
    {name:'PHP',iconClass:'fa-brands fa-php',level:'Intermediare'},
    {name:'MongoDB',iconClass:'fa-solid fa-seedling',level:'Intermediare'},
    {name:'Node.js',iconClass:'fa-brands fa-node-js',level:'Intermediare'},
    {name:'Spring Boot',iconClass:'fa-solid fa-leaf',level:'Intermediare'},
    {name:'MySQL',iconClass:'fa-solid fa-database',level:'Intermediare'},
    {name:'Git & GitHub',iconClass:'fa-brands fa-git-alt',level:'Intermediare'},
    {name:'Docker',iconClass:'fa-brands fa-docker',level:'Basique'},
    {name:'python',iconClass:'fa-brands fa-python',level:'Intermediare'},
    {name:'C',iconClass:'fa-solid fa-c',level:'Intermediare'},
    {name:'symfony',iconClass:'fa-solid fa-cubes',level:'Intermediare'},
    {name:'linux',iconClass:'fa-solid fa-terminal',level:'Intermediare'},
    {name:'Agile Methodologies',iconClass:'fa-solid fa-people-group',level:'Intermediare'},
    {name:'react',iconClass:'fa-brands fa-react',level:'Basique'},
    {name:'vue',iconClass:'fa-brands fa-vuejs',level:'Basique'},
    {name:'flutter',iconClass:'fa-solid fa-f',level:'Intermediare'},
    {name:'jira',iconClass:'fa-solid fa-clipboard-list',level:'Intermediare'},
    {name:'mikroTik',iconClass:'fa-solid fa-network-wired',level:'Basique'},
    {name:'Cisco',iconClass:'fa-solid fa-network-wired',level:'Basique'},
    {name:'fortinet',iconClass:'fa-solid fa-network-wired',level:'Basique'},

  ];

}
