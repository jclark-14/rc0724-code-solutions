import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './About';
import { Catalog } from './Catalog';
import { Product } from './Product';
import { NotFound } from './NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index path="/" element={<Catalog />} />
        <Route path="about" element={<About />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
