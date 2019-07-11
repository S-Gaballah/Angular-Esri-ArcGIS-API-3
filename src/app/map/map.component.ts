import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';

import { MapService } from './map.service';


@Component({
    // moduleId: module.id,
    selector: 'map',
    template: `
    <div #mapElement id="map" class="map">
    </div>
    `,
})

export class MapComponent implements AfterViewInit {
    map: any;
    @ViewChild('mapElement', { static: true }) mapRef: ElementRef;
    ngAfterViewInit(): void {
        this.map = this.mapService.CreateMap(this.mapRef.nativeElement);
        this.map.on('extent-change', this.MapExtentCange);
        this.mapService.AddDynamicLayer(this.map);
    }

    constructor(private mapService: MapService) {
    }

    // ngOnInit() {
    // }

    MapExtentCange(evt) {
        console.log(evt);
    }
}
