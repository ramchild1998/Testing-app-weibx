import { JetView } from "webix-jet";

export default class FormView extends JetView{
	config(){
		const _ = this.app.getService("locale")._; //dapatkan metode untuk menerjemahkan label

		const film_form = {
			view:"form",
			width:350,
			elements:[
				{ type:"section", template:_("edit films") },
				{ view:"text", name:"title", label:_("Judul") },
				{ view:"text", name:"year", label:_("Tahun") },
				{ view:"text", name:"rating", label:_("Rating") },
				{ view:"text", name:"votes", label:_("Votes") },
				{
					margin:10, cols:[
						{ view:"button", value:_("Simpan"), css:"webix_primary" },
						{ view:"button", value:_("Bersihkan"), css:"webix_secondary" }
					]
				},
				{}
			]
		};
		return film_form;
	}
}
