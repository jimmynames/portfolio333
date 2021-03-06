import { createStore } from 'redux'
import reducer from './reducer.js'

export default function configureStore () {
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer.js', () => {
      const nextReducer = require('./reducer.js')
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
