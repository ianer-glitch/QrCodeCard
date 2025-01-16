import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class localStorageService{
    setLocalStorage(key:string,data:any){
        const serialized = JSON.stringify(data)
        localStorage.setItem(key,serialized)
    }

    getLocalStorage(key:string){
        const item = localStorage.getItem(key)
        return JSON.parse(item ?? "");
    }

}