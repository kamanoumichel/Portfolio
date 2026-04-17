import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../../shared/services/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projects : Project[] = [];
  
  constructor(private projectService: ProjectService){}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

}
