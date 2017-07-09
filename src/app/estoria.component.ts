import { Component, Input } from '@angular/core';
import { EstoriaService } from './estoria.service';
import { Estoria } from './estoria';

@Component({
    selector: 'estoria',
    templateUrl: 'html/estoria.component.html'
})
export class EstoriaComponent {
    @Input() estoria: Estoria;

    constructor(private estoriaService: EstoriaService) { }

    finalizarEstoria(): void {

    	let confirmado = confirm("confirmado");
    	
    	if (confirmado) {
	        this.estoria.finalizada = !this.estoria.finalizada;
	        this.estoriaService.alterar(this.estoria).subscribe(estoria => alert("Estória \"" + this.estoria.titulo + "\" " + (this.estoria.finalizada ? "finalizada" : "reativada") + " com sucesso."));
    	}

    }
}