import Error404 from "containers/errors/Error404";
import Contacto from "containers/pages/Contacto";
import Estaciones from "containers/pages/Estaciones";
import Home from "containers/pages/Home";
import LogCache from "containers/pages/LogCache";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Page */}
          <Route path="*" element={<Error404 />} />
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          {/* Estaciones List Page */}
          <Route path="/estaciones" element={<Estaciones />} />
          {/* LogCache Page */}
          <Route path="/logcache" element={<LogCache />} />
          {/* Contact Page */}
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
