
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
      imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80',
      icon: '🚰'
    },
    {
      title: 'Climatisation & HVAC',
      description: 'Systèmes de climatisation et ventilation industriels',
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80',
      icon: '❄️'
    },
    {
      title: 'Infrastructure',
      description: 'Canalisations pour projets d\'infrastructure majeurs',
      imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80',
      icon: '🏗️'
    },
    {
      title: 'Agriculture & Irrigation',
      description: 'Systèmes d\'irrigation pour l\'agriculture moderne',
      imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
      icon: '🌾'
    },
    {
      title: 'Évacuation & Assainissement',
      description: 'Solutions pour l\'évacuation des eaux usées',
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80',
      icon: '♻️'
    }
  ];

  clients: Client[] = [
    { name: 'SONEDE', logoUrl: 'https://via.placeholder.com/180x90/3b82f6/ffffff?text=SONEDE' },
    { name: 'ONAS', logoUrl: 'https://via.placeholder.com/180x90/10b981/ffffff?text=ONAS' },
    { name: 'STEG', logoUrl: 'https://via.placeholder.com/180x90/f59e0b/ffffff?text=STEG' },
    { name: 'OTC', logoUrl: 'https://via.placeholder.com/180x90/ef4444/ffffff?text=OTC' },
    { name: 'CRDA', logoUrl: 'https://via.placeholder.com/180x90/8b5cf6/ffffff?text=CRDA' },
    { name: 'TUNISIE TELECOM', logoUrl: 'https://via.placeholder.com/180x90/06b6d4/ffffff?text=TT' }
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