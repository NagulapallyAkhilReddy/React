// import {createStore} from 'redux'
// // import { myReducer } from './Reducer'

// const myStore=createStore(myReducer)
// export {myStore}

import { configureStore } from '@reduxjs/toolkit'
import counterreducer2 from './Reducer'
export const store = configureStore({
  reducer: {counter:counterreducer2},
})
