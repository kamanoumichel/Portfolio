import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { About } from "../../components/about/about";
import { Skills } from "../../components/skills/skills";
import { Projects } from "../../components/projects/projects";
import { Experience } from "../../components/experience/experience";
import { Contact } from "../../components/contact/contact";
import { Education } from "../../components/education/education";
import { Languauges } from '../../components/languauges/languauges';


@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Projects, Experience, Contact, Education, Languauges],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
