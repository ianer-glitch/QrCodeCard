import { Component, signal } from '@angular/core';
import { InputTextComponent } from '../../components/atoms/input-text/input-text.component';
import { PrimaryButtonComponent } from '../../components/atoms/primary-button/primary-button.component';
import { Router } from '@angular/router';
import { localStorageService } from '../../core/localStorageService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [InputTextComponent,PrimaryButtonComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router,private local : localStorageService) {

  }
  
  inputText = signal("")

  handleButtonClick(){
    console.info(this.inputText())
    this.local.setLocalStorage('qrCode',this.inputText())
    this.router.navigate(['/qr-code'])
  }

  handleInputTextChange(e : Event){
    const el = e.target as HTMLInputElement;
    this.inputText.set(el.value)
  }
}
