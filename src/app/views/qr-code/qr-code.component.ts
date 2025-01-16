import { Component, signal } from '@angular/core';
import { apiService } from '../../core/apiService';
import { CommonModule } from '@angular/common';
import { localStorageService } from '../../core/localStorageService';


@Component({
  selector: 'app-qr-code',
  imports: [CommonModule],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent {
  
  constructor(private api : apiService,private local:localStorageService) {
  }

  imgUrl = signal('')

  ngOnInit(){
    const data = this.local.getLocalStorage("qrCode")
    if(data){
      this.api.getQrCode("200",data).subscribe((response)=>
        this.imgUrl.set(URL.createObjectURL(response))
      )
    }
  }
}
