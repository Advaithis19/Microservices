import "./App.css";
import { Products } from "./admin/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import ProductCreate from "./admin/ProductCreate";
import ProductEdit from "./admin/ProductEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/products/create" element={<ProductCreate />} />
          <Route path="/admin/products/:id/edit" element={<ProductEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
