import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Estoria } from './estoria';
import { Tarefa } from './tarefa';
import { EstoriaService } from './estoria.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'estoria-visualizar',
    templateUrl: 'html/estoria-visualizar.component.html'
})
export class EstoriaVisualizarComponent implements OnInit {
    estoria: Estoria;
    tarefa: Tarefa = new Tarefa();
    estoriaVazia: boolean = true;

    constructor(
        private estoriaService: EstoriaService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.estoriaService.getEstoria(+params['id']))
            .subscribe(estoria => this.estoria = estoria);
    }

    adicionarTarefa(): void {
        this.tarefa.id = this.setIdTarefa();
        this.estoria.tarefas.push(this.tarefa);
        this.tarefa = new Tarefa();
        this.estoriaVazia = true;
    }

    private setIdTarefa(): number {
        let id = this.estoria.tarefas.length + 1;

        this.estoria.tarefas.forEach(tarefa => {
            if (tarefa.id >= id) {
                id = tarefa.id + 1;
            }
        });

        return id;
    }

    voltar(): void {
        this.location.back();
    }

    salvar(): void {
        this.estoriaService.alterar(this.estoria).subscribe(estoria => alert('Estória salva/'));
    }
}