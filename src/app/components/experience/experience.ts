import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ExperienceItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experience: ExperienceItem[] = [
    {
      title: 'Stagiaire en développement web et infrastructure réseaux',
      subtitle: 'TAD-IT & Servives -- Yaoundé, Cameroun',
      period: 'Juillet 2023 - Septembre 2023',
      description: 'Installation de baies informatiques et déploiement d\'un réseau structuré; Conception de plans d\'installation réseau et configuration d\'un portail captif; Installation et paramétrage de clients légers (zero client); Maintenance préventive et corrective du matériel informatique'
    },{
      title: 'Stagiaire Assistant en Systèmes Informations',
      subtitle: 'Institut Supérieur Hintel -- Yaoundé, Cameroun',
      period: 'Juin 2022 - Septembre 2022',
      description: 'Implémentation et gestion de l\'ERP de l\'institut; Conception et développement d\'une plateforme d\'archivage électronique; Utilisation avancée d\'Odoo en tant que CRM; Mise en place d\'un LMS basé sur Moodle'
    },{
      title: 'Stagiaire au support technique',
      subtitle: 'Infogénie Technologies -- Yaoundé, Cameroun',
      period: 'Juillet 2020 - Septembre 2020',
      description: 'Installation et configuration d\'antennes radio MikroTik; Configuration de routeurs MikroTik; Maintenance du matériel informatique; Assistance technique aux clients'
    }

  ];

}
