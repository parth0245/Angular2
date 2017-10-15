import { Injectable} from '@angular/core'
import { IRating } from './rating'
import { Http ,Response} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/Observable/throw'

@Injectable()
export class RatingService {
    constructor(private http:Http){}
    getReviews() : Observable<IRating[]> {
        /*return [
            {company:"Nokia",mobile:"Nokia 6",feedback:"good",name:"Parth",rating:"positive"},
            {company:"samsung",mobile:"galaxy 6",feedback:"bad",name:"payas",rating:"negative"},
            {company:"HTC",mobile:"butterfly",feedback:"good",name:"Parth",rating:"positive"}
        ]*/

        return this.http.get("http://demo7430966.mockable.io/ratingList")
        .map((response : Response)=> <IRating[]>response.json()) 
        .catch(this.error);
    } 

    error(error : Response){
        return Observable.throw(error); // this throws the error back as there is no way to do
    }
}