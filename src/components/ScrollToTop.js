import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // jab bhi pathname change hoga (matlab naye route pe jaoge)
    window.scrollTo(0, 0); // page top pe chala jaayega
  }, [pathname]);

  return null; // kuch render nahi karna
};

export default ScrollToTop;