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
  rotX = signal(0)
  rotY = signal(0)
  ngOnInit(){
    this.getQrCode()
    this.handle3d()
  }
  handle3d(){
    window.addEventListener("mousemove",e=>{
      const w  = window.innerWidth;
      const h = window.innerWidth;

      this.rotX.set(7*2-e.pageY *(14*2/h))
      this.rotY.set(8*2-e.pageX*(16*2/w))
    })
  }

  getQrCode(){
    const data = this.local.getLocalStorage("qrCode")
    if(data){
      this.api.getQrCode("200",data).subscribe((response)=>
        this.imgUrl.set(URL.createObjectURL(response))
      )
    }
  }
}
