import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './pages/DefoultLayout';
import './App.css'
import MoviesList from './pages/Movies/Movies';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<MoviesList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
