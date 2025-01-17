import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SearchResults from '../pages/SearchResults';
import ProductDetails from '../pages/ProductDetails';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<SearchResults />} />
            <Route path="/items/:id" element={<ProductDetails />} />
        </Routes>
    </Router>
);

export default AppRoutes;