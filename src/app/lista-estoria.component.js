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
var estoria_service_1 = require('./estoria.service');
var ListaEstoriaComponent = (function () {
    function ListaEstoriaComponent(estoriaService) {
        this.estoriaService = estoriaService;
        this.errorMessage = "";
    }
    ListaEstoriaComponent.prototype.ngOnInit = function () {
        this.getEstorias();
    };
    ListaEstoriaComponent.prototype.getEstorias = function () {
        var _this = this;
        this.estoriaService.getEstorias()
            .subscribe(function (estorias) { return _this.estorias = estorias; }, function (error) { return _this.errorMessage = error; });
    };
    ListaEstoriaComponent.prototype.totalDeEstorias = function () {
        return (this.estorias ? this.estorias.length : '');
    };
    ListaEstoriaComponent = __decorate([
        core_1.Component({
            selector: 'lista-estoria',
            templateUrl: 'html/lista-estoria.component.html'
        }), 
        __metadata('design:paramtypes', [estoria_service_1.EstoriaService])
    ], ListaEstoriaComponent);
    return ListaEstoriaComponent;
}());
exports.ListaEstoriaComponent = ListaEstoriaComponent;
//# sourceMappingURL=lista-estoria.component.js.map