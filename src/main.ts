import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { ListaEstoriaComponent } from './app/lista-estoria.component';
import { EstoriaComponent } from './app/estoria.component';
import { TarefaComponent } from './app/tarefa.component';
import { EstoriaVisualizarComponent } from './app/estoria-visualizar.component';
import { EstoriaService } from './app/estoria.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'estorias', pathMatch: 'full' },
    { path: 'estorias', component: ListaEstoriaComponent },
    { path: 'visualizar/:id', component: EstoriaVisualizarComponent }
];

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, ListaEstoriaComponent, EstoriaComponent, TarefaComponent, EstoriaVisualizarComponent],
    providers: [EstoriaService],
    bootstrap: [AppComponent]
})

class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);