"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var EstoriaService = (function () {
    function EstoriaService(http) {
        this.http = http;
        this.apiEstorias = 'http://localhost:3001/estorias';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    EstoriaService.prototype.getEstoria = function (id) {
        return this.getEstorias().map(function (estorias) { return estorias.find(function (estoria) { return estoria.id === id; }); });
    };
    EstoriaService.prototype.getEstorias = function () {
        return this.http.get(this.apiEstorias)
            .map(this.buscarEstorias)
            .catch(this.handleError);
    };
    EstoriaService.prototype.buscarEstorias = function (res) {
        var body = res.json();
        return body || {};
    };
    EstoriaService.prototype.alterar = function (estoria) {
        var url = this.apiEstorias + "/" + estoria.id;
        return this.http.put(url, JSON.stringify(estoria), { headers: this.headers }).map(function (estoria) { return estoria; }).catch(this.handleError);
    };
    EstoriaService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Erro no servidor');
    };
    EstoriaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EstoriaService);
    return EstoriaService;
}());
exports.EstoriaService = EstoriaService;
//# sourceMappingURL=estoria.service.js.map