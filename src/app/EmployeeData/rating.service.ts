import { Injectable} from '@angular/core'
import { IRating } from './rating'

@Injectable()
export class RatingService {
    getReviews() : IRating[] {
        return [
            {company:"Nokia",mobile:"Nokia 6",feedback:"good",name:"Parth",rating:"positive"},
            {company:"samsung",mobile:"galaxy 6",feedback:"bad",name:"payas",rating:"negative"},
            {company:"HTC",mobile:"butterfly",feedback:"good",name:"Parth",rating:"positive"}
        ]
    } 
}