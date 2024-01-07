import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurClientsComponent implements OnInit{

  clients = [
    {
      name: "Finnet",
      image_url: "assets/client/finnet.png",
      url:"https://www.finpay.id/",
    },
    {
      name: "Mitratel",
      image_url: "assets/client/Mitratel.png",
      url:"https://www.mitratel.co.id/",
    },
    {
      name: "Tristar",
      image_url: "assets/client/Tristar.png",
      url:"",
    },
    {
      name: "VAI",
      image_url: "assets/client/VAI.png",
      url:"http://www.pengadaanku.com/",
    },
    {
      name: "Inti Persada",
      image_url: "assets/client/inti persada.png",
      url:"https://www.persadanusantara.co.id/",
    },
    {
      name: "Phintraco",
      image_url: "assets/client/Phintraco.png",
      url:"https://phintracosekuritas.com/",
    },
    {
      name: "Josi",
      image_url: "assets/client/Josi.png",
      url:"",
    },
    {
      name: "Azeta",
      image_url: "assets/client/Azeta.png",
      url:"https://azeta.co.id/",
    },
    {
      name: "Bach",
      image_url: "assets/client/Bach.png",
      url:"https://www.bach.co.id/",
    },
    {
      name: "PUPR",
      image_url: "assets/client/PUPR.png",
      url:"https://pu.go.id/",
    },
    {
      name: "kreddo",
      image_url: "assets/client/kreddo.png",
      url:"https://kreddo.com/id/",
    },
    {
      name: "MBS",
      image_url: "assets/client/MBS.png",
      url:"",
    },
    {
      name: "UI",
      image_url: "assets/client/UI.png",
      url:"https://www.ui.ac.id/",
    },
    {
      name: "Kominfo",
      image_url: "assets/client/Kominfo.png",
      url:"https://www.kominfo.go.id/",
    },
    {
      name: "Layton",
      image_url: "assets/client/Layton.png",
      url:"https://layton.co.id/",
    },
    {
      name: "paul & co",
      image_url: "assets/client/paul& co.png",
      url:"https://www.paulasia.com/id/",
    },
    {
      name: "telkom property",
      image_url: "assets/client/telkom property.png",
      url:"https://www.telkomproperty.co.id/",
    },
  ]
  chunk(array: any[], size: number) {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }

  chunkedClients = this.chunk(this.clients, 6);

  openUrl(url: string): void {
    (window as any).open(url, '_blank');
  }

  constructor() {
  }

  ngOnInit(): void {

  }

}
