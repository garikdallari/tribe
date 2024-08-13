import { useState, useEffect } from "react";
import s from "./Cart.module.css";
import CardPay from "../components/CardPay";

const Cart = ({handleSubmit}) => {
  const [price, setPrice] = useState(32);
  const [total, setTotal] = useState(32);
  const [quantity, setQuantity] = useState(1);

  const incr = () => {
    setQuantity(quantity + 1);
  };
  const decr = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setTotal(quantity * price);
  }, [quantity, price])


  return (
    <div className={s.wrapper}>
      <div>
        <h1>Cart</h1>
      </div>
      <div className={s.hero}>
        <form onSubmit={handleSubmit} className={s.form}>
          <div className={s.clientData}>
            <p className={s.title}>Customer details</p>
            <div className={s.inputs}>
              <div className={s.inputWrapper}>
                <input type="email" placeholder="Email for order confirmation *" />
              </div>
              <div className={s.inputWrapper}>
                <input placeholder="First name *"/>
              </div>
              <div className={s.inputWrapper}>
                <input placeholder="Last name *" />
              </div>
              <div className={s.inputWrapper}>
                <input placeholder="Phone number" type="number" />
              </div>
            </div>
          </div>
          <div className={s.details}>
            <p className={s.title}>Order summary</p>
            <div className={s.product}>
              <div className={s.image}>
                <img src="./bio.jpg" alt="" />
                <div className={s.data}>
                  <p>TribeBiotics</p>
                  <div className={s.qWrapper}>
                    <div>Qty: {quantity}</div>
                    <div className={s.counter}>
                      <button
                        onClick={incr}
                        type="button"
                        className={s.counterBtn}
                      >
                        +
                      </button>
                      <button
                        onClick={decr}
                        type="button"
                        className={s.counterBtn}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={s.price}>
                <p>{price}$</p>
              </div>
            </div>
            <CardPay/>
            <div className={s.total}>
              <p className={s.totalText}>Total:</p>
              <p className={s.totalNumber}>{total}$</p>
            </div>
            <div className={s.buttonWrapper}>
              <button className={s.btn} type="submit">
                Checkout
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
