"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var select_band_service_1 = require("./select-band.service");
describe('SelectBandService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [select_band_service_1.SelectBandService]
        });
    });
    it('should be created', testing_1.inject([select_band_service_1.SelectBandService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=select-band.service.spec.js.map