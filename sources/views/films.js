import { JetView } from "webix-jet";
import { getData } from "models/films";
import FormView from "views/form";

export default class FilmsView extends JetView{
	config(){
		const _ = this.app.getService("locale")._; //dapatkan metode untuk menerjemahkan label

		const film_table = {
			view:"datatable",
			id:"film_list",
			select:true,
			scrollY:true,
			url:"data/data.js",
			minWidth:400,
			hover:"myhover",
			columns:[
				{ id:"rank", header:"", width:50 },
				{ id:"title", header:[_("Film title"), { content:"textFilter" }], fillspace:true, sort:"text" },
				{ id:"year", header:[_("Released"), { content:"selectFilter" }], width:100, sort:"int" },
				{ id:"votes", header:_("Votes"), width:80, sort:"int" },
				{ id:"rating", header:_("Rating"), width:80, sort:"int" }
			]
		};

		return {
			cols:[
				film_table,
				FormView //termasuk Subview statis
			]
		};
	}

	init(view){
		const datatable = view.queryView("datatable"); //dapatkan contoh Datatable
		datatable.parse(getData()); //memuat data ke dalamnya
	}
}
