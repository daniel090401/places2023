import { Injectable } from '@angular/core';
import { Place } from './models/models';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ServiceNameService {
  
  constructor(private http: HttpClient) { }

} 

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
    id: '1',
    title: 'Teotihuacan',
    imageURL: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/04/Teotihuacan_Pano_5de-sep_color_IG.jpg',
    comments: ['This city was awesome in pass time',]
    },
    {
    id: '2',
    title: 'Piramides de guiza',
    imageURL: 'https://static.nationalgeographic.es/files/styles/image_3200/public/giza-plateau-pyramids.jpg?w=1900&h=1267',
    comments: ['This city was awesome in pass time',]

    }
  ];

  constructor(private http: HttpClient) { }

  getFotos() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=15');
  }

  getPlaces() {
    return [...this.places];
  }

  adPlace(title: string, imageURL: string) {
    this.places.push(
      {
        id: this.places.length + 1 + '',
        title,
        imageURL,
        comments: [],
      }
    );
  }

  getPlace(id: string) {
    return {
      ...this.places.find(places =>
        places.id === id
      ), 
    };
  }

  deletePlace(id: string) {
    this.places = this.places.filter(x => x.id !== id);
  }
}
