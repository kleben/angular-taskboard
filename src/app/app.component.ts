import { Component } from '@angular/core';

@Component({
  selector: 'meu-app',
  template: `
      <div>
        <nav class="indigo darken-4" role="navigation">
            <div class="nav-wrapper container">
              <a id="logo-container" href="#" class="brand-logo">Angular Taskboard</a>
            </div>
        </nav>

        <div class="container">
          <router-outlet></router-outlet>
        </div>

        <footer class="page-footer orange">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                Introdução ao Angular
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            Feito com <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>

			</div>`,
})
export class AppComponent {
  titulo: string = "TaskBoard";
}