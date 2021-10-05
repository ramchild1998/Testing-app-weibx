import { JetView } from "webix-jet";
import { getData } from "models/produk";

export default class ProductsView extends JetView{
	config(){
		const _ = this.app.getService("locale")._; //dapatkan metode untuk menerjemahkan label

		const products_treetable = {
			view:"treetable",
			scrollY:true,
			scrollX:false,
			select:true,
			columns:[
				{ id:"id", header:"", width:50 },
				{ id:"judul", header:_("Judul"), fillspace:true,  template:"{common.treetable()} #title#" },
				{ id:"harga", header:_("Harga"), width:200 }
			]
		};

		return products_treetable;
	}

	init(view){
		view.parse(getData()); //memuat data ke Treetable
	}
}
