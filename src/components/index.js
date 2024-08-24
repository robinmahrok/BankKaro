import CardsComponent from './CardsComponent/index';
import Header from './HeaderComponent/HeaderComponent';
import CardsListComponent from './CardsListComponent';
import FooterComponent from './FooterComponent';
import CompareCardsComponent from './CompareCardsComponent';
import LoungeFinderComponent from './LoungeFinderComponent';
import ImpactComponent from './ImpactComponent';

/*
Since we do not have to perform any logical operations inside this project also this is not supposed to be scallable.
So, we are not going to create separate folder for screens and containers.
*/
function Components() {
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

export default Components;
