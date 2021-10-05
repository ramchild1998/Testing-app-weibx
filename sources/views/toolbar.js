import { JetView } from "webix-jet";

export default class ToolbarView extends JetView{
	config(){
		const _ = this.app.getService("locale")._; //dapatkan metode untuk menerjemahkan label

		//dapatkan nilai lokal
		const lang = this.app.getService("locale").getLang();
		const toolbar = {
			view:"toolbar",
			css:"webix_dark",
			elements:[
				{ view: "label", label:_("PTCT Webix Assesment - Ramadiansyah") },
				{
					view:"segmented",
					value:lang,
					optionWidth:40, inputWidth:100, align:"right",
					options:[
						{ id:"id", value:"Id" },
						{ id:"en", value:"En" },
					],
					click:() => this.toggleLanguage()
				}
			]
		};

		return toolbar;
	}
	//berfungsi untuk beralih ke bahasa lain
	toggleLanguage(){
		const langs = this.app.getService("locale"); //dapatkan layanan lokal
		/*
		Gunakan this.getRoot() untuk membuka widget Webix teratas di dalam JetView
		Ini dia Toolbar
		*/
		const value = this.getRoot().queryView("segmented").getValue(); //dapatkan nilai tersegmentasi
		langs.setLang(value); //atur nilai Lokal
	}
}
