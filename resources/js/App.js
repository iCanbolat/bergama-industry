import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import News from "./pages/News";
import Product from "./pages/Product";
import QualitySystem from "./pages/QualitySystem";
import Contact from "./pages/Contact";
import NewsDetails from "./pages/NewsDetails";
import Celik from "./components/product/Celik";
import Boru from "./components/product/Boru";
import Isı from "./components/product/Isı";
import Kap from "./components/product/Kap";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda"  element={<About />} />
            <Route path="/haberler"  element={<News />} />
            <Route path="/urunler"  element={<Product />} />
            <Route path="/urunler/:slug"  element={<ProductDetails />} />
            <Route path="/kalite-sistemleri"  element={<QualitySystem />} />
            <Route path="/iletisim"  element={<Contact />} />
            <Route path="/haber-detay/:slug"  element={<NewsDetails />} />
            {/* Ürün Detay */}
            <Route path="/celik"  element={<Celik />} />
            <Route path="/boru"  element={<Boru />} />
            <Route path="/isi"  element={<Isı />} />
            <Route path="/kap"  element={<Kap />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
