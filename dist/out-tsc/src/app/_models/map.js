"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeoJson = /** @class */ (function () {
    function GeoJson(coordinates, properties) {
        this.properties = properties;
        this.type = 'Feature';
        this.geometry = {
            type: 'Point',
            coordinates: coordinates
        };
    }
    return GeoJson;
}());
exports.GeoJson = GeoJson;
var FeatureCollection = /** @class */ (function () {
    function FeatureCollection(features) {
        this.features = features;
        this.type = 'FeatureCollection';
    }
    return FeatureCollection;
}());
exports.FeatureCollection = FeatureCollection;
//# sourceMappingURL=map.js.map