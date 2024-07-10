import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <body className='body'>

        <NavBar />

        <ItemListContainer summerdeal={"Ultimos lanzamientos de verano"} deal={"https://imgs.search.brave.com/9-MG0a60mH_KbNES3Lpa6h6_dqZGMko3ioa7LH0X6Uk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZWNhc3Rlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDMvaW1hZ2VfMjU0/NGRjLnBuZz93PTgw/MCZoPTgwMCZjcm9w/PTE"} />

      </body>

      <footer></footer>
    </>
  )
}

export default App