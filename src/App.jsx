import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './pages/DefoultLayout';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
