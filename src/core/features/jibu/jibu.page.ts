import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jibu',
  templateUrl: './jibu.page.html',
  styleUrls: ['./jibu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class JibuPage {
  title = 'Welcome to Jibu App 🚀';
}
