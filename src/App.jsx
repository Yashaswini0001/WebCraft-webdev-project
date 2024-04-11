import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Logo from './components/Logos'

function App() {


  return (
    <>
    <div className='container'>
    <Header></Header>
   <Content></Content>
   <Logo></Logo>
   </div>
    </>
  )
}

export default App
