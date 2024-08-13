import React from "react";
import s from "./CardPay.module.css";

const CardPay = () => {
  return (
    <div className={s.cardpay}>
      <p className={s.title}>Credit Card Payment</p>
      <div className={s.wrapper}>
        <input
          id="name"
          name="name"
          className={s.fullInput}
          placeholder="Name on card"
        />

        <input
          id="number"
          name="number"
          className={s.fullInput}
          placeholder="Card number"
        />
        <div className={s.group}>
          <input className={s.groupInput} id="expiry" name="expiry" placeholder="MM" />
          <input className={s.groupInput} id="year" name="year" placeholder="YYYY" />
          <input className={s.groupInput} id="cvv" name="cvv" placeholder="CVV" />
        </div>
      </div>
    </div>
  );
};

export default CardPay;
