import { Outlet,useLocation } from "react-router-dom"
import RgbLoading from "./components/RgbLoading/RgbLoading"
import { useState, useEffect } from 'react';

const App=()=>{

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleLoading = () => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); 

      return () => clearTimeout(timer);
    };

    handleLoading();
  }, [location]);

  return <div>
    {loading && <RgbLoading />}
    <Outlet/>
    </div>
}
export default App