import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-Persistedstate'

export const init = (app) => {
    const pinia = createPinia();
    pinia.use(piniaPluginPersistedstate);
    app.use(pinia);
}