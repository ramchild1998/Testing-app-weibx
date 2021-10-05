import { JetView } from "webix-jet";
import { getData } from "models/pengguna";

export default class UsersView extends JetView{
	config(){
		const _ = this.app.getService("locale")._; //dapatkan metode untuk menerjemahkan label

		const list = {
			view:"list",
			template:"#nama#, #umur#, #negara#",
			height:300,
			scrollY:true,
			scrollX:false,
			select:true
		};

		const list_toolbar = {
			height: 40,
			view:"toolbar",
			elements:[
				{ view:"button", value:_("Tambah orang baru"), css:"webix_primary", width:160 },
				{ view:"search" },
				{ view:"button", value:_("Sort asc"), css:"webix_primary", width:120 },
				{ view:"button", value:_("Sort desc"), css:"webix_primary", width:120 }
			]
		};

		const chart = {
			view:"chart",
			type:"bar",
			value:"#umur#",
			minHeight:200,
			barWidth:40,
			radius:1,
			xAxis:{
				template:"#nama#",
				title:_("Umur")
			},
			yAxis:{
				start:0,
				end:100,
				step:10
			}
		};

		return { rows:[list_toolbar, list, chart] };
	}

	init(view){
		const list = view.queryView("list"); //dapatkan contoh Daftar
		list.parse(getData()); //memuat data ke dalamnya

		const chart = view.queryView("chart"); //dapatkan contoh Daftar
		chart.parse(getData()); //memuat data ke dalamnya
	}
}
