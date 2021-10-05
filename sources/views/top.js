import { JetView } from "webix-jet";
import ToolbarView from "views/toolbar";

export default class TopView extends JetView{
	config(){
		const _ = this.app.getService("locale")._; //dapatkan metode untuk menerjemahkan label

		const sidebar = {
			width:300,
			minWidth:250,
			maxWidth:350,
			view:"list",
			scroll:false,
			css:"gray_background",
			select:true,
			data:[
				{ value:_("Dasbor"), id:"films" },
				{ value:_("Pengguna"), id:"pengguna" },
				{ value:_("Produk"), id:"produk" }
			],
			on:{
				onAfterSelect:(id) => this.show(id) //ubah nilai URL
			}
		};

		const footer = {
			height: 30,
			template:_("The software is provided by <a href='https://webix.com'>webix.com</a>. All rights reserved &#169;"),
			css:"text_center"
		};

		const ui = {
			rows:[
				ToolbarView, //termasuk Subview statis
				{
					cols:[
						sidebar,
						{ view:"resizer" },
						{ $subview:true } //aktifkan Subview dinamis
					]
				},
				footer
			]
		};

		return ui;
	}
}
