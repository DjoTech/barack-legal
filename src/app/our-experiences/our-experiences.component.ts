import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-our-experiences',
  templateUrl: './our-experiences.component.html',
  styleUrls: ['./our-experiences.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurExperiencesComponent {

  types = [
    {
      name: 'Dispute Resolutions',
      key: "DISPUTE_RESOLUTION",
      expanded: true
    },
    {
      name: 'Corporate Legals',
      key: "CORPORATE_LEGALS",
      expanded: false
    },
    {
      name: 'Compliances & Licensing',
      key: "COMPLIANCES_AND_LICENSING",
      expanded: false
    },
    {
      name: 'Intellectual Property Rights',
      key: "INTELLECTUAL_PROPERTY_RIGHTS",
      expanded: false
    },
    {
      name: 'Taxation',
      key: "TAXATION",
      expanded: false
    },
  ]

  lists = [
    {
      type: "DISPUTE_RESOLUTION",
      active: true,
      contents: [
        "Representing a national company in the shares-ownership dispute in connection to one of the biggest public financing companies in Indonesia with the civil, criminal, and administrative court proceedings",
        "Representing creditors in bankruptcy and insolvency process against 3 (three) of the largest oil palm companies from Malaysia in North Kalimantan, and won with 2 (two) of them settled in insolvency process and 1 (one) of the settled in bankruptcy process.",
        "Providing a background investigation on one of the biggest property developers and its shareholders in Indonesia, in relation to a planned transaction.",
        "Representing one of Indonesia's largest distributors of fragrances products in sole distributorship rights with civil and criminal proceedings.",
        "Representing a multinational oil and gas company in a default dispute with one of its subcontractors, and won the first stage of the case at the District Court level.",
        "Assisting one of the biggest cable television companies in Indonesia during a court proceeding for a tax fraud (tort case) against its shareholders.",
        "Representing an international Swiss-based bank on the bankruptcy process of three of its debtors and assisting the client as the Secured Creditors during the liquidation of the bankruptcy assets.",
        "Representing a national company in a dispute regarding its distribution license against the Indonesian Food and Medicine Body at Jakarta State Administrative Court.",
        "Representing a plantation company in a default dispute against one of its suppliers as a defendant, and won the first stage of the case at the District Court level.",
        "Providing individual tracing on the behalf of a multinational private construction company from China, which currently operates in Indonesia.",
        "Assisting clients in various court and out-of-court disputes as well as other general advisory and research work by providing advice to the client(s) on litigation, corporate and investment matters, conducting research on the relevant government bodies, reviewing the legal and regulatory framework of the project and also handling the establishment of a new foreign investment company as well as preparing the legal memorandum and/or legal opinion and legal advice relating to insolvency/bankruptcy matters.",
      ]
    },
    {
      type: "CORPORATE_LEGALS",
      active: false,
      contents: [
        "Providing corporate legal retainer services for one of the largest private company groups in general constructions and telecommunication infrastructure constructions in Indonesia.",
        "Providing corporate legal retainer services for a multinational private construction company from China in Indonesia.",
        "Providing legal services on a land lease extension for many sites in Sulawesi, Maluku, and Papua for one of the largest telecommunication infrastructures providers in Indonesia, including for new applications, extension applications, and change on data/structure applications.",
        "Conducting an overall Legal Due Diligence for a right issue of a Malaysian-based poultry company in Indonesia.",
        "Conducting Legal Due Diligence on one of Indonesia’s largest forestry company groups, in relation to the acquisitions of the company.",
        "Conducting Legal Due Diligence on one of the biggest public mining companies in Indonesia, in relation to its right issue project.",
        "Conducting Legal Due Diligence on one of the largest international hotel chains in Indonesia, in relation to the acquisition plans of the company.",
        "Providing legal review and research on one of the largest companies in the manufacturing and distribution of electricity, water, and gas meters in Indonesia, in relation to its business development plan.",
        "Providing legal opinions for one of the biggest Southeast Asia's largest independent automotive groups regarding manpower matters and civil proceedings.",
        "Providing advice to the client(s) on litigation, corporate and investment matters, by conducting research on the relevant government bodies, reviewing the legal and regulatory framework of the project and handling the establishment of a new foreign investment company as well as preparing the legal memorandum and/or legal opinion.",
      ]
    },
    {
      type: "COMPLIANCES_AND_LICENSING",
      active: false,
      contents: [
        "Providing business licenses for many national companies from various industries such as general contractors, telecommunication infrastructures contractors, general goods manufacturers, international goods distributors, consulting companies, and many others.",
        "Contributed in providing Building Permit (Izin Mendirikan Bangunan, currently known as Persetujuan Bangunan Gedung or PBG) on many sites in Banten and Java for one of the largest telecommunication infrastructures providers in Indonesia, including for new application, extension application, and change on data/structure application.",
        "Providing internal compliances planning and concept for the issuance of International Organization for Standardization (ISO) Certification and Initial Public Offering (IPO) future plan.",
      ]
    },
    {
      type: "INTELLECTUAL_PROPERTY_RIGHTS",
      active: false,
      contents: [
        "Assisting leading manufacturers of consumers goods from the United Kingdom, regarding its registration of intellectual property rights.",
        "Supporting the registration of intellectual property rights of major global payment brands and a leading credit card issuer and acquirer in Japan.",
        "Assisting one of a well-known logistics companies from Indonesia which has operated worldwide, in relation to its intellectual property rights.",
        "Providing assistance of intellectual property rights services to a premium brand dairy multinational companies from New Zealand.",
        "Assisting an SME under Corporate Social Responsibility from Indonesian state-owned oil and natural gas company to register its intellectual property rights.",
      ]
    },
    {
      type: "TAXATION",
      active: false,
      contents: [
        "Assisted in the tax debt settlement between a leading Indonesian general construction company and the Indonesian Directorate General of Tax with the values amount of IDR 1 billion, with the settled value of IDR 400 million."
      ]
    },
  ]

  contents: any = this.lists[0].contents

  constructor(
    private ref: ChangeDetectorRef,
  ) {
  }

  onClickType(item: any): void {
    this.types.forEach(i => i.expanded = i.key === item.key)
    this.contents =  this.lists.find(type => type.type === item.key)?.contents
    this.ref.detectChanges()
  }


  expandItem(item: any) {
    item.expanded = true;
  }

  collapseItem(item: any) {
    item.expanded = false;
  }

}
