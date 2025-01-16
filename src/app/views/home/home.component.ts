import { Component } from '@angular/core';
import { InputTextComponent } from '../../components/atoms/input-text/input-text.component';
import { PrimaryButtonComponent } from '../../components/atoms/primary-button/primary-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [InputTextComponent,PrimaryButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /**
   *
   */
  constructor(private router:Router) {

  }
  
  handleButtonClick(){
    this.router.navigate(['/qr-code'])
  }
}
