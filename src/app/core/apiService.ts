import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class apiService{
    private apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?'
        constructor(private http: HttpClient){
    }

    getQrCode(size :string ="150", text:string) : Observable<any>{
        return this.http.get(`${this.apiUrl}size=${size}x${size}&data=${text}`,{responseType:'blob'})
    }
}