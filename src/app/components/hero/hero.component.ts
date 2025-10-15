import { Component, OnDestroy, OnInit } from '@angular/core';
interface Hero {
  title: string;
  subtitle: string;
  imageUrl: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [
    {
      title: ' Innovation en plasturgie',
      subtitle: 'Des solutions plastiques précises et fiables pour l’industrie. ',
      imageUrl: 'assets/images/hero1.png'
    },
    {
      title: 'Produits durables ',
      subtitle: 'Assainissement, irrigation et électricité avec performance garantie. ',
      imageUrl: 'assets/images/hero2.png'
    },  
    {
      title: 'Votre partenaire sur-mesure',
      subtitle: 'Accompagnement et solutions plastiques adaptées à vos projets. ',
      imageUrl: 'assets/images/hero3.png'
    } 
  ];

  activeIndex = 0;
  isPaused = false;
  private interval: any;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.activeIndex = (this.activeIndex + 1) % this.heroes.length;
      }
    }, 5000);
  }

  stopAutoplay(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}