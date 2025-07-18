// import { useState } from 'react'
import './App.css'
import Lottery from './Lottery';
// import Ticket from './Ticket';
// import Ticket from './Ticket'
// import TicketNum from './TicketNum'

function App() {


  return (
    <>
<h1>Lottery Game</h1>
<Lottery n = {3} winningSum = {15}/>
    </>
  )
}

export default App
