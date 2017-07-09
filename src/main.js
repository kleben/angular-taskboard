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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app/app.component');
var lista_estoria_component_1 = require('./app/lista-estoria.component');
var estoria_component_1 = require('./app/estoria.component');
var tarefa_component_1 = require('./app/tarefa.component');
var estoria_visualizar_component_1 = require('./app/estoria-visualizar.component');
var estoria_service_1 = require('./app/estoria.service');
var appRoutes = [
    { path: '', redirectTo: 'estorias', pathMatch: 'full' },
    { path: 'estorias', component: lista_estoria_component_1.ListaEstoriaComponent },
    { path: 'visualizar/:id', component: estoria_visualizar_component_1.EstoriaVisualizarComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, lista_estoria_component_1.ListaEstoriaComponent, estoria_component_1.EstoriaComponent, tarefa_component_1.TarefaComponent, estoria_visualizar_component_1.EstoriaVisualizarComponent],
            providers: [estoria_service_1.EstoriaService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map