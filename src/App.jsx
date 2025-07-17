import Header from './components/Header.jsx'
import Main from './components/Main.jsx' 
import Card from  './components/Card.jsx' 
import cardData from './cardData.js'

function App() {
  const cards = cardData.map((card) => {
    return(
      <Card
      key={card.id}
      {...card}/>
    )
  })

  return(
    <div className='bg-indigo-50 h-screen flex flex-col'>
      <Header />
      <Main /> 
      {cards}
    </div>
  )
} 

export default App;
