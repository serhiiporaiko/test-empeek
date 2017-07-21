import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    constructor() { }

    getItem(key: string){
        return JSON.parse(localStorage.getItem(key));
    }

    setItem(key: string, obj){
        localStorage.setItem(key, JSON.stringify(obj));
    }
}