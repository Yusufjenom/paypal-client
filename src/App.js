
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import { useState, createContext } from 'react';
import {queryClient, queryClientProvider} from '@tanstack/react-query'


export const AppContext = createContext()


function App() {
  
  const [globalText, setGlobalText] = useState('')
 
  return (
    
    <div className="App">
      <AppContext.Provider value={{globalText, setGlobalText}}>
       <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home globalText={globalText}/>}/>
          {/* <Route path='/menu' element={<Menu globalText={globalText} setGlobalText={setGlobalText}/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/form' element={<Form />}/> */}
          {/* <Route path='/custom' element={<Custom/>}></Route>
          <Route path='/toggle' element={<useToggle/>}></Route> */}
        </Routes>
       </Router>
      
       </AppContext.Provider>
    </div>
    
  );
}

export default App;
