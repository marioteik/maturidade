import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpHandlerService } from './http-handler.service';
import { Entity } from '../models/entity';

@Injectable()
export class BaseHttpService {
    private apiURL = 'http://localhost:3000/api';
    public endpoints = [];

    constructor(public httpHandler: HttpHandlerService) { }

    list(): Observable<any[]> {
        return this.httpHandler.get<any>(`${this.apiURL}/${this.endpoints[1]}`, 3);
    }

    count(): Observable<number> {
        return this.httpHandler.get<number>(`${this.apiURL}/${this.endpoints[1]}/count`, 3);
    }

    get(id: string): Observable<any> {
        return this.httpHandler.get<any>(`${this.apiURL}/${this.endpoints[0]}/${id}`, 3);
    }

    create(obj: any): Observable<any> {
        return this.httpHandler.post<any>(`${this.apiURL}/${this.endpoints[0]}`, obj);
    }

    update(obj: any): Observable<any> {
        return this.httpHandler.put<any>(`${this.apiURL}/${this.endpoints[0]}/${obj._id}`, obj);
    }

    delete(id: string): Observable<any> {
        return this.httpHandler.delete<any>(`${this.apiURL}/${this.endpoints[0]}/${id}`);
    }
}
