import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Layout } from "./Layout/Layout.js";
import { lazy } from 'react';
import { useSearchParams } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home.js'));

export const App = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
const [isOpen, setIsOpen] = useState(query ? false : true);
  
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  //   const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <Routes>
      <Route path="/" element={<Layout onOpenMenu={openMobileMenu}/>}>
        <Route index element={<Home statusMenu={isOpen} onCloseMenu={ closeMobileMenu}/>} />
      </Route>
    </Routes>
  );
};

