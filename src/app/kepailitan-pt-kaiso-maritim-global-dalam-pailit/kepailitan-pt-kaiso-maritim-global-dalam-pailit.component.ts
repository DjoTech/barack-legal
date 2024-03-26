import {ChangeDetectionStrategy, Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-kepailitan-pt-kaiso-maritim-global-dalam-pailit',
  templateUrl: './kepailitan-pt-kaiso-maritim-global-dalam-pailit.component.html',
  styleUrls: ['./kepailitan-pt-kaiso-maritim-global-dalam-pailit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KepailitanPtKaisoMaritimGlobalDalamPailitComponent {

  constructor(
    private pdfService: NgxExtendedPdfViewerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    /* More likely than not you don't need to tweak the pdfDefaultOptions.
       They are a collecton of less frequently used options.
       To illustrate how they're used, here are two example settings: */
    pdfDefaultOptions.doubleTapZoomFactor = '200%'; // The default value is '200%'
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; // The default value is 4096 * 4096 pixels,
    // but most devices support much higher resolutions.
    // Increasing this setting allows your users to use higher zoom factors,
    // trading image quality for performance.


    }

    onClick() {
      window.location.reload()
    }



}
