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
    },
    {
      name: "Mitratel",
      image_url: "assets/client/Mitratel.png",
    },
    {
      name: "Tristar",
      image_url: "assets/client/Tristar.png",
    },
    {
      name: "VAI",
      image_url: "assets/client/VAI.png",
    },
    {
      name: "Inti Persada",
      image_url: "assets/client/inti persada.png",
    },
    {
      name: "Phintraco",
      image_url: "assets/client/Phintraco.png",
    },
    {
      name: "Josi",
      image_url: "assets/client/Josi.png",
    },
    {
      name: "Azeta",
      image_url: "assets/client/Azeta.png",
    },
    {
      name: "Bach",
      image_url: "assets/client/Bach.png",
    },
    {
      name: "PUPR",
      image_url: "assets/client/PUPR.png",
    },
    {
      name: "kreddo",
      image_url: "assets/client/kreddo.png",
    },
    {
      name: "MBS",
      image_url: "assets/client/MBS.png",
    },
    {
      name: "UI",
      image_url: "assets/client/UI.png",
    },
    {
      name: "Kominfo",
      image_url: "assets/client/Kominfo.png",
    },
    {
      name: "Layton",
      image_url: "assets/client/Layton.png",
    },
    {
      name: "paul & co",
      image_url: "assets/client/paul& co.png",
    },
    {
      name: "telkom property",
      image_url: "assets/client/telkom property.png",
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


  constructor() {
  }

  ngOnInit(): void {

  }

}
