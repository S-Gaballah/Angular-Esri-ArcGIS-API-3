import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service';

@Component({
    // moduleId: module.id,
    selector: 'map',
    template: `
    <div #mapElement id="map" class="map">
    </div>
    `,
})

export class MapComponent implements OnInit {
    map: any;

    constructor(private mapService: MapService) {
    }

    ngOnInit() {
        this.map = this.mapService.CreateMap();
        this.map.on('extent-change', this.MapExtentCange);
        this.mapService.AddDynamicLayer(this.map);
    }

    MapExtentCange(evt) {
        console.log(evt);
    }
}
