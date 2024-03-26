import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-cases',
  templateUrl: './public-cases.component.html',
  styleUrls: ['./public-cases.component.css']
})
export class PublicCasesComponent {


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {  }

  onClick() {
    this.router.navigate(['/kepailitan-pt-kaiso-maritim-global-dalam-pailit'], {relativeTo: this.route})
  }

}
