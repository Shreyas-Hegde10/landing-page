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
    <div className='bg-indigo-50 min-h-screen flex flex-col min-w-screen overflow-x-hidden'>
      <Header />
      <Main /> 
      <div className="flex flex-col max-w-4xl mx-auto justify-between gap-y-2 sm:gap-x-5 sm:flex-row">
        {cards}
      </div>
    </div>
  )
} 

export default App;
