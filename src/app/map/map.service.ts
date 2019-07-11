import { Injectable, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

import Map from 'esri/map';
import ArcGISDynamicMapServiceLayer from 'esri/layers/ArcGISDynamicMapServiceLayer';

@Injectable()
export class MapService {

    private _map: Map;

    @ViewChild('mapElement', { static: true }) mapRef: ElementRef;

    get Map() {
        return this._map;
    }
    CreateMap(mapRef) {
        this._map = new Map(mapRef, {
            basemap: 'topo',
            center: [-96.75290067627297, 39.034671990514816], // long, lat
            zoom: 7,
            sliderStyle: 'small'
        });
        return this.Map;
    }

    AddDynamicLayer(map) {
        let dynamicLayer = new ArcGISDynamicMapServiceLayer
            ('https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Petroleum/KGS_OilGasFields_Kansas/MapServer', {
                'id': 'dynamicLayer',
                'opacity': 0.75
            });

        map.addLayer(dynamicLayer);
    }
}