import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import './pages/Home.css';
import Info from './pages/Info';
import './pages/Info.css';
import Start from './pages/Start';
import './pages/Start.css';
import Result from './pages/Result';
import "./pages/Result.css"

function App() {

  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Info" element={<Info/>}/>
          <Route path="/Start" element={<Start/>}/>
          <Route path="/Result" element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App ;
