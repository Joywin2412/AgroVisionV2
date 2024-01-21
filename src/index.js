import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import App2 from "./App2";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./pages/context";

ReactDOM.render(
  <>

    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
// <Provider store={store}>
// <App />
// </Provider>