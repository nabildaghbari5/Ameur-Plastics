
import { Component, OnDestroy, OnInit } from '@angular/core';

interface Application {
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

interface Client {
  name: string;
  logoUrl: string;
}

@Component({
  selector: 'app-tube-pvc',
  templateUrl: './tube-pvc.component.html',
  styleUrls: ['./tube-pvc.component.scss']
})
export class TubePvcComponent implements OnInit, OnDestroy {
   applications: Application[] = [
      {
      title: 'ASSAINISSEMENT GRAVITAIRE',
      description: 'Gestion et évacuation des eaux usées par réseaux gravitaires pour collectivités et industries',
      imageUrl: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=800&fit=crop&q=80',
      icon: '🚿'
    },
    {
      title: 'ELECTRICITÉ & TÉLÉCOM',
      description: 'Protection et distribution des câbles électriques et réseaux de télécommunication',
      imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop&q=80',
      icon: '⚡'
    },
    {
      title: 'EVACUATION DES EAUX USÉES & PLUVIALES',
      description: 'Systèmes de drainage et d\'évacuation des eaux de pluie et eaux domestiques',
      imageUrl: 'https://images.unsplash.com/photo-1590642916589-592bca10dfbf?w=1200&h=800&fit=crop&q=80',
      icon: '💧'
    },
    {
      title: 'FORAGE',
      description: 'Tubes de forage pour captage et extraction d\'eau souterraine',
      imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&q=80',
      icon: '🏞️'
    },
    {
      title: 'IRRIGATION',
      description: 'Solutions d\'irrigation pour l\'agriculture et espaces verts avec optimisation des ressources',
      imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
      icon: '🌾'
    }
  ];

  clients: Client[] = [
    { name: 'SONEDE', logoUrl: '/assets/images/client1.png' },
    { name: 'ONAS', logoUrl: '/assets/images/client2.png' },
    { name: 'STEG', logoUrl: '/assets/images/client3.png' },
    { name: 'OTC', logoUrl: '/assets/images/client4.png' },
    { name: 'CRDA', logoUrl: '/assets/images/client5.png' },
    { name: 'TUNISIE TELECOM', logoUrl: '/assets/images/client6.png' }
  ];

  qualityStats = [
    { value: '30+', label: 'Années d\'expérience', icon: '📅' },
    { value: '5000+', label: 'Projets réalisés', icon: '✨' },
    { value: '100%', label: 'Satisfaction client', icon: '⭐' },
    { value: 'ISO 9001', label: 'Certifications', icon: '🏆' }
  ];

  currentSlide = 0;
  autoplayInterval: any;
  isPaused = false;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      if (!this.isPaused) {
        this.nextSlide();
      }
    }, 3000); 
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.applications.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0
      ? this.applications.length - 1
      : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  onMouseEnter(): void {
    this.isPaused = true;
  }

  onMouseLeave(): void {
    this.isPaused = false;
  }
}