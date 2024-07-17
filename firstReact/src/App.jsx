import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MainBanner from './components/MainBanner'
import ItemListContainer from './components/ItemListContainer'
import Earrings from './components/Earrings'
import Bracelets from './components/Bracelets'
import Necklaces from './components/Necklaces'
import Rings from './components/Rings'
import Watches from './components/Watches'

function App() {

  return (
    <>
      <body className='body'>

        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          </Routes>
          
 
        </BrowserRouter>


      </body>

      <footer></footer>
    </>
  )
}

export default App