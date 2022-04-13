import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  constructor() { }

  googleMapsInit(upcomingRace: any) {
    let loader = new Loader({
      apiKey: 'AIzaSyB2hyVwH1DR-3C39ThPNAURhPJQOR0sAO0',

    });
    loader.load().then(() => {
      let target = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: {
          lat: Number(upcomingRace?.Circuit.Location.lat),
          lng: Number(upcomingRace?.Circuit.Location.long),
        },
        zoom: 8
      })

      new google.maps.Marker({
        position: {
          lat: Number(upcomingRace?.Circuit.Location.lat),
          lng: Number(upcomingRace?.Circuit.Location.long),
        },
        map: target,
      })
    })
  }

}
