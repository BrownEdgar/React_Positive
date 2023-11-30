import ReactDOM from "react-dom/client";
import App from './components/posts/PostList'
import { Provider } from "react-redux";
import store  from "./app/store";
import { PersistGate } from 'redux-persist/integration/react'

import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
    </Provider>

);
