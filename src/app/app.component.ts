import { Component } from '@angular/core';
import { ShellComponent } from "./core/components/shell/shell.component";
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [ShellComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'smart-home';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){

      this.matIconRegistry.addSvgIcon('play', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/play.svg'));
      this.matIconRegistry.addSvgIcon('forward-step', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/forward-step.svg'));
      this.matIconRegistry.addSvgIcon('backward-step', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/backward-step.svg'));
      this.matIconRegistry.addSvgIcon('arrows-rotate', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/arrows-rotate.svg'));
      this.matIconRegistry.addSvgIcon('shuffle', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/shuffle.svg'));
      this.matIconRegistry.addSvgIcon('volume-off', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/volume-off.svg'));
      this.matIconRegistry.addSvgIcon('volume-low', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/volume-low.svg'));
      this.matIconRegistry.addSvgIcon('volume-high', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/volume-high.svg'));
    }
}
