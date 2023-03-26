import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import {logo} from './assets';
import {Home,CreatePost} from './pages';
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';

const App = () => {
  const[isDarkMode,setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(()=> {
    if(theme==="dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const handleDarkMode = () => {
    // setIsDarkMode(!isDarkMode);
    setTheme(theme=== "dark" ? "light": "dark");
  };

  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white dark:bg-[#031B34] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:border-b-[#062647]">

      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain fill-cyan-500" />
        
      </Link>
      <div className='flex items-center'>
        <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
        <button className='ml-4' onClick={handleDarkMode}>
          {theme==="dark" ? (
            <img src={sun} alt="light" />
          ):(
            <img src={moon} alt="dark" />
          )}
        </button>
      </div>

      </header>

      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] dark:bg-[#031B34] dark:text-white min-h-[calc(100vh-73px)]'>

        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/create-post' element={<CreatePost/>}/>
        </Routes>

      </main>

    </BrowserRouter>
  )
}

export default App
