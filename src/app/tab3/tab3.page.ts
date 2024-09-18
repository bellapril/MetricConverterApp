import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})

export class Tab3Page {
  lengthInput: number = 0;
  lengthFrom: string = '';
  lengthTo: string = '';
  lengthOutput: number = 0;

  tempInput: number = 0;
  tempFrom: string = '';
  tempTo: string = '';
  tempOutput: number = 0;

  constructor() {}

  convertLength() {
    const lengthUnits = {
      km: 1000,
      hm: 100,
      dam: 10,
      m: 1,
      dm: 0.1,
      cm: 0.01,
      mm: 0.001,
    };

    if (this.lengthInput && this.lengthFrom && this.lengthTo) {
      // Menggunakan casting agar TypeScript tahu bahwa `this.lengthFrom` dan `this.lengthTo` adalah kunci valid
      this.lengthOutput = (this.lengthInput * lengthUnits[this.lengthFrom as keyof typeof lengthUnits]) / lengthUnits[this.lengthTo as keyof typeof lengthUnits];
    }
  }

  convertTemperature() {
    if (this.tempInput && this.tempFrom && this.tempTo) {
      if (this.tempFrom === 'C' && this.tempTo === 'F') {
        this.tempOutput = (this.tempInput * 9/5) + 32;
      } else if (this.tempFrom === 'F' && this.tempTo === 'C') {
        this.tempOutput = (this.tempInput - 32) * 5/9;
      } else if (this.tempFrom === 'C' && this.tempTo === 'K') {
        this.tempOutput = this.tempInput + 273.15;
      } else if (this.tempFrom === 'K' && this.tempTo === 'C') {
        this.tempOutput = this.tempInput - 273.15;
      } else if (this.tempFrom === 'C' && this.tempTo === 'R') {
        this.tempOutput = this.tempInput * 0.8;
      } else if (this.tempFrom === 'R' && this.tempTo === 'C') {
        this.tempOutput = this.tempInput / 0.8;
      }
    }
  }
}
