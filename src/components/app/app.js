import Profile from '../profile/profile';
import Header from '../header/header';
import PaymentForm from '../payment-form/payment-form';

function App() {
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
