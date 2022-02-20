//importar el Store de VueX
import { createStore } from 'vuex'

import journalModule from '../modules/daybook/store/journal'

//Crear el store

const store = createStore({
    
    modules:{
        journal: journalModule
    }

})



export default store