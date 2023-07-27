import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import {init as naiveInit} from './plugins/naive'
import {init as piniaInit} from './plugins/naive'
import setupAssets from "./plugins/setAsset";
import VueKinesis from "vue-kinesis";
import Particles from "particles.vue3";
// import VueParticles from 'vue-particles'
const setupApp = async () =>{
    const app = createApp(App);
    naiveInit(app);
    piniaInit(app);
    setupAssets();
    app.use(router);
    app.use(VueKinesis);
    app.use(Particles);
    // app.use(VueParticles);
    app.mount('#app')
}


setupApp();





