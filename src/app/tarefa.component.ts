import { Component, Input } from '@angular/core';
import { Tarefa } from './tarefa';
import { Estoria } from './estoria';

@Component({
    selector: 'tarefa',
    templateUrl: 'html/tarefa.component.html'
})
export class TarefaComponent {
    @Input() estoria: Estoria;
    @Input() tarefa: Tarefa;

    removerTarefa(): void {
        this.estoria.tarefas = this.estoria.tarefas.filter(tarefa => this.tarefa.id !== tarefa.id);
    }
}