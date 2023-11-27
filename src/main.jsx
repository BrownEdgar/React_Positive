import ReactDOM from "react-dom/client";
import App from "./components/posts/PostsList";
import './index.css'
import { Provider } from "react-redux";
import store from "./app/store";




ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
<App />
</Provider>
);
 