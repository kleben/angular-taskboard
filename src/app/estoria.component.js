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
var estoria_1 = require('./estoria');
var EstoriaComponent = (function () {
    function EstoriaComponent(estoriaService) {
        this.estoriaService = estoriaService;
    }
    EstoriaComponent.prototype.finalizarEstoria = function () {
        var _this = this;
        var confirmado = confirm("confirmado");
        if (confirmado) {
            this.estoria.finalizada = !this.estoria.finalizada;
            this.estoriaService.alterar(this.estoria).subscribe(function (estoria) { return alert("Estória \"" + _this.estoria.titulo + "\" " + (_this.estoria.finalizada ? "finalizada" : "reativada") + " com sucesso."); });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', estoria_1.Estoria)
    ], EstoriaComponent.prototype, "estoria", void 0);
    EstoriaComponent = __decorate([
        core_1.Component({
            selector: 'estoria',
            templateUrl: 'html/estoria.component.html'
        }), 
        __metadata('design:paramtypes', [estoria_service_1.EstoriaService])
    ], EstoriaComponent);
    return EstoriaComponent;
}());
exports.EstoriaComponent = EstoriaComponent;
//# sourceMappingURL=estoria.component.js.map