import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import initialState from './Context/initialState';
import reducer from './Context/reducer';
import { StateProvider } from './Context/stateProvider';

// Dynamic imports
const Header = lazy(() => import('./Components/Header'));
const Loader = lazy(() => import('./Components/Loader'));
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Cart = lazy(() => import('./Pages/Cart'));
const Services = lazy(() => import('./Pages/Services'));
const CreateItem = lazy(() => import('./Pages/CreateItem'));

// Fallback component for Suspense
function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Header />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/cart" exact element={<Cart />} />
              <Route path="/services" exact element={<Services />} />
              <Route path="/create-item" exact element={<CreateItem />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AnimatePresence>
    </StateProvider>
  );
}

export default App;
