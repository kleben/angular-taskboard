import { Component } from '@angular/core';
import { Estoria } from './estoria';
import { EstoriaService } from './estoria.service';

@Component({
    selector: 'lista-estoria',
    templateUrl: 'html/lista-estoria.component.html'
})
export class ListaEstoriaComponent {
    estorias: Estoria[];
    errorMessage: string = "";

    constructor(private estoriaService: EstoriaService) { }

    ngOnInit() {
        this.getEstorias();
    }

    getEstorias(): void {
        this.estoriaService.getEstorias()
            .subscribe(estorias => this.estorias = estorias,
            error => this.errorMessage = <any>error);
    }

    totalDeEstorias() {
        return (this.estorias ? this.estorias.length : '');
    }
}