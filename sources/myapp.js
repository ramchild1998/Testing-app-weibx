import "./styles/app.css";
import { JetApp, plugins } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			debug : true, //aktifkan mode debug
			start : "/top/films" //setel titik awal
		};
		super({ ...defaults, ...config });
	}
}

const app = new MyApp();
app.use(plugins.Locale); //aktifkan plugin Lokal sebelum aplikasi dirender
webix.ready(() => app.render());
