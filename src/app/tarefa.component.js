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
var tarefa_1 = require('./tarefa');
var estoria_1 = require('./estoria');
var TarefaComponent = (function () {
    function TarefaComponent() {
    }
    TarefaComponent.prototype.removerTarefa = function () {
        var _this = this;
        this.estoria.tarefas = this.estoria.tarefas.filter(function (tarefa) { return _this.tarefa.id !== tarefa.id; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', estoria_1.Estoria)
    ], TarefaComponent.prototype, "estoria", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', tarefa_1.Tarefa)
    ], TarefaComponent.prototype, "tarefa", void 0);
    TarefaComponent = __decorate([
        core_1.Component({
            selector: 'tarefa',
            templateUrl: 'html/tarefa.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TarefaComponent);
    return TarefaComponent;
}());
exports.TarefaComponent = TarefaComponent;
//# sourceMappingURL=tarefa.component.js.map