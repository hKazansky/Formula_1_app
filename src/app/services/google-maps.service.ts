import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  constructor() { }

  googleMapsInit(final: any) {
    let loader = new Loader({
      apiKey: 'AIzaSyB2hyVwH1DR-3C39ThPNAURhPJQOR0sAO0',

    });
    loader.load().then(() => {
      let target = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: {
          lat: Number(final?.Circuit.Location.lat),
          lng: Number(final?.Circuit.Location.long),
        },
        zoom: 8
      })

      new google.maps.Marker({
        position: {
          lat: Number(final?.Circuit.Location.lat),
          lng: Number(final?.Circuit.Location.long),
        },
        map: target,
      })
    })
  }

}
