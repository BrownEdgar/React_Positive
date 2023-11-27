import ReactDOM from 'react-dom/client'
import App from './components/posts/Posts'
import store from './app/store'
import { Provider } from 'react-redux'

import './index.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);