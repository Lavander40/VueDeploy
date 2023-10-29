import { createApp } from 'vue'
import App from "./App";
import Ui from "@/components/ui";
import router from "@/router/router";
import store from "@/store";
import Directives from "@/directives";

const app = createApp(App);
Ui.forEach(ui=>{
    app.component(ui.name, ui)
});
Directives.forEach(directive=>{
    app.directive(directive.name, directive)
});
app
    .use(router)
    .use(store)
    .mount('#app');
