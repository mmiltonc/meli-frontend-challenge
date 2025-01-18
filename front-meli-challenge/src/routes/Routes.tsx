import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, SearchResults, ProductDetails } from '../pages'

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