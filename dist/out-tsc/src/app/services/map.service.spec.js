"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var map_service_1 = require("./map.service");
describe('MapService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [map_service_1.MapService]
        });
    });
    it('should be created', testing_1.inject([map_service_1.MapService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=map.service.spec.js.map