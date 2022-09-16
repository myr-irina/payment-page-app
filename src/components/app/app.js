import Profile from '../profile/profile';
import Header from '../header/header';
import PaymentForm from '../payment-form/payment-form';

function App() {
  
  document.addEventListener(
    'touchmove',
    function (event) {
      event = event.originalEvent || event;
      if (event.scale !== undefined && event.scale !== 1) {
        event.preventDefault();
      }
    },
    false
  );

  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <div className='page__content'>
          <Profile />
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}

export default App;
