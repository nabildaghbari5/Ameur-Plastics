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
      title: 'Innovation Redéfinie',
      subtitle: 'Transformez vos idées en solutions digitales exceptionnelles',
        imageUrl: 'assets/images/hero1.png'
    },
    {
      title: 'Excellence Technologique',
      subtitle: 'Des solutions de pointe pour propulser votre entreprise',
      imageUrl: 'assets/images/hero2.png'
    },
    {
      title: 'Vision d\'Avenir',
      subtitle: 'Ensemble, construisons le futur de votre entreprise',
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