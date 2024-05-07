import { useState } from 'react';
import { Header } from "./Header/Header.js";
import { Gallery } from "./Gallery/Gallery.js";


export const App = ({onCloseMenu}) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  //   const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <Header onOpenMenu={openMobileMenu}/>
      <Gallery statusMenu={isOpen} onCloseMenu={ closeMobileMenu} />
    </>
  );
};
