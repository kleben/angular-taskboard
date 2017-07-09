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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var tarefa_1 = require('./tarefa');
var estoria_service_1 = require('./estoria.service');
require('rxjs/add/operator/switchMap');
var EstoriaVisualizarComponent = (function () {
    function EstoriaVisualizarComponent(estoriaService, route, location) {
        this.estoriaService = estoriaService;
        this.route = route;
        this.location = location;
        this.tarefa = new tarefa_1.Tarefa();
        this.estoriaVazia = true;
    }
    EstoriaVisualizarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.estoriaService.getEstoria(+params['id']); })
            .subscribe(function (estoria) { return _this.estoria = estoria; });
    };
    EstoriaVisualizarComponent.prototype.adicionarTarefa = function () {
        this.tarefa.id = this.setIdTarefa();
        this.estoria.tarefas.push(this.tarefa);
        this.tarefa = new tarefa_1.Tarefa();
        this.estoriaVazia = true;
    };
    EstoriaVisualizarComponent.prototype.setIdTarefa = function () {
        var id = this.estoria.tarefas.length + 1;
        this.estoria.tarefas.forEach(function (tarefa) {
            if (tarefa.id >= id) {
                id = tarefa.id + 1;
            }
        });
        return id;
    };
    EstoriaVisualizarComponent.prototype.voltar = function () {
        this.location.back();
    };
    EstoriaVisualizarComponent.prototype.salvar = function () {
        this.estoriaService.alterar(this.estoria).subscribe(function (estoria) { return alert('Estória salva/'); });
    };
    EstoriaVisualizarComponent = __decorate([
        core_1.Component({
            selector: 'estoria-visualizar',
            templateUrl: 'html/estoria-visualizar.component.html'
        }), 
        __metadata('design:paramtypes', [estoria_service_1.EstoriaService, router_1.ActivatedRoute, common_1.Location])
    ], EstoriaVisualizarComponent);
    return EstoriaVisualizarComponent;
}());
exports.EstoriaVisualizarComponent = EstoriaVisualizarComponent;
//# sourceMappingURL=estoria-visualizar.component.js.map