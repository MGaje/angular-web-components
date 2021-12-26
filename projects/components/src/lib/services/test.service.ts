import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(
        private readonly http: HttpClient
    ) { }

    testCall(id: string): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/todos/' + id);
    }
}
