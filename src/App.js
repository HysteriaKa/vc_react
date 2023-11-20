import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
const App = () => {
	return (
<BrowserRouter>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
		<Route path="/portefolio" element={<Portfolio />} />
		<Route path="/knowledges" element={<Knowledges />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
</BrowserRouter>
	);
};

export default App;
