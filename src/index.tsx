import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

import "./index.css";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
