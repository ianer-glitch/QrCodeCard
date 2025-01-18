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
  text = signal('')
  ngOnInit(){
    this.getQrCode()
    this.handle3d()
  }
  handle3d(){
    this.handleMouseMove()
    // this.handleDeviceMove()
    this.handleDeviceMove()
  }
  
  handleMouseMove(){
    window.addEventListener("mousemove",e=>{
      const w  = window.innerWidth;
      const h = window.innerWidth;
      
      this.rotX.set(7*4-e.pageY *(14*4/h))
      this.rotY.set(8*4-e.pageX*(16*4/w))
    })
    
  }
  
  shouldRotate = signal(false)
  
  handleDeviceMove(){
    window.addEventListener("deviceorientation",e=>{


      const limitValue = 40
      const tempX = Math.round(e.beta ?? 0) -40
      
      
      const x = Math.max(-limitValue,Math.min(tempX,limitValue))
      
      // Todo: Add treshold for should rotate indicator
      this.shouldRotate.set(x === -limitValue || tempX === limitValue)
      
      
      
      const y = Math.round(e.gamma ?? 0)
      
      
      this.rotX.set(x)
      this.rotY.set(y)

      // this.rotX.set(7*16-x *(14*16/h))
      // this.rotY.set(8*8-y*(16*8/w))
    
    })
    
  }

 

  getQrCode(){
    const data = this.local.getLocalStorage("qrCode")
    if(data){
      this.api.getQrCode("150",data).subscribe((response)=>
        this.imgUrl.set(URL.createObjectURL(response))
      )
    }
  }
}
