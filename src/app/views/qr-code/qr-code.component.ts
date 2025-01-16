import { Component, signal } from '@angular/core';
import { apiService } from '../../core/apiService';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-qr-code',
  imports: [CommonModule],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent {
  
  constructor(private api : apiService) {
  }

  imgUrl = signal('')

  ngOnInit(){
    this.api.getQrCode("150","someText").subscribe((response)=>
      this.imgUrl.set(URL.createObjectURL(response))
    )
  }
}
