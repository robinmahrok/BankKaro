import CardsComponent from './cardsComponent/index';
import Header from './headerComponent/headerComponent';
import './boxContainer.css';
import CardsListComponent from './cardsListComponent';
import FooterComponent from './FooterComponent';
import CompareCardsComponent from './CompareCardsComponent';
import LoungeFinderComponent from './LoungeFinderComponent';
import ImpactComponent from './ImpactComponent';
function App() {
  return (
    <div className='container'>
      <Header />
      <CardsComponent />
      <CardsListComponent />
      <CompareCardsComponent />
      <LoungeFinderComponent />
      <ImpactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
