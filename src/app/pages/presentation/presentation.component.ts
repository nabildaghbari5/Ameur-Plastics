import { Component, OnInit } from '@angular/core';

interface Statistic {
  value: string;
  label: string;
  icon: string;
  color: string;
}

interface Partner {
  name: string;
  logoUrl: string;
}

interface Value {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  statistics: Statistic[] = [
    {
      value: '2004',
      label: 'Année de création',
      icon: '📅',
      color: '#3b82f6'
    },
    {
      value: '400+',
      label: 'Collaborateurs',
      icon: '👥',
      color: '#10b981'
    },
    {
      value: '2',
      label: 'Sites de production',
      icon: '🏭',
      color: '#f59e0b'
    },
    {
      value: '100%',
      label: 'Satisfaction client',
      icon: '⭐',
      color: '#ef4444'
    }
  ];

  partners: Partner[] = [
    { name: 'ONAS', logoUrl: '/assets/images/client1.png' },
    { name: 'ARRU',  logoUrl: '/assets/images/client2.png' },
    { name: 'CRDA', logoUrl: '/assets/images/client3.png'},
    { name: 'GPC', logoUrl: '/assets/images/client4.png'  },
    { name: 'SOCATRAP', logoUrl: '/assets/images/client5.png'},
    { name: 'CFPA', logoUrl: '/assets/images/client6.png' }
  ];

  values: Value[] = [
    {
      title: 'Qualité',
      description: 'Personnel qualifié et équipements de dernière génération pour des réalisations exceptionnelles',
      icon: '🎯'
    },
    {
      title: 'Réactivité',
      description: 'Une structure PME flexible et réactive pour répondre rapidement à vos besoins',
      icon: '⚡'
    },
    {
      title: 'Innovation',
      description: 'Technologies de pointe et amélioration continue de nos processus de production',
      icon: '💡'
    },
    {
      title: 'Proximité',
      description: 'À l\'écoute de nos clients avec un accompagnement personnalisé sans lourdeur administrative',
      icon: '🤝'
    }
  ];

  currentYear: number = new Date().getFullYear();
  yearsOfExperience: number = this.currentYear - 2004;

  ngOnInit(): void {}
}