
import './App.css';
import { useState } from 'react';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import ThankyouPage from './pages/ThankyouPage';

function App() {
  const [homepageShown, setHomepageShown] = useState(true)
  const [goToCart, setGoToCart] = useState(false);
  const [submitted, setSubmitted] = useState(false)
  const clickHandler = () => {
    setGoToCart(!goToCart)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(!submitted)
    setGoToCart(!goToCart)
    setHomepageShown(!homepageShown)
  }
  return (
    <div className="App">
      {!goToCart && homepageShown  && <Homepage clickHandler={clickHandler}/>}
      {goToCart && <Cart handleSubmit={handleSubmit}/>}
      {submitted && <ThankyouPage />}
    </div>
  );
}

export default App;
