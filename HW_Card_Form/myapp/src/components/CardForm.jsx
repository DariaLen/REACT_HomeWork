import React, { useState } from "react";
import s from "./CardForm.module.css";

import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";


export default function CardForm({ onCardData }) {
  const currentYear = new Date().getFullYear() % 100; // Для валидации года
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCardNumberValid, setIsCardNumberValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);
  const [isCvcValid, setIsCvcValid] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value.replace(/[^a-zA-Z\s]/g, ""));
    setIsNameValid(event.target.value.match(/^[A-Za-z]+ [A-Za-z]+$/));
  };

  const validateCardNumber = (number) => {
    const re = /^\d{16}$/;
    return re.test(number);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value.replace(/[^\d]/g, ""));
    setIsCardNumberValid(validateCardNumber(event.target.value));
  };

  const validateExpiryDate = (date) => {
    const re = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    const match = date.match(re);
    return match && parseInt(match[2]) >= currentYear;
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value.replace(/[^\d\/]/g, ""));
    setIsDateValid(validateExpiryDate(event.target.value));
  };

  const handleCvcChange = (event) => {
    setCvc(event.target.value.replace(/[^\d]/g, ""));
    setIsCvcValid(event.target.value.length === 3);
  };

  const handleSend = (event) => {
    event.preventDefault(); // Чтобы не происходила перезагрузка страницы

    // Обновление состояний валидации
    setIsNameValid(name.match(/^[A-Za-z]+( [A-Za-z]+)+$/));
    setIsCardNumberValid(validateCardNumber(cardNumber));
    setIsDateValid(validateExpiryDate(expiryDate));
    setIsCvcValid(cvc.length === 3);

    if (
      validateCardNumber(cardNumber) &&
      validateExpiryDate(expiryDate) &&
      name.match(/^[A-Za-z]+( [A-Za-z]+)+$/) &&
      cvc.length === 3
    ) {
      // отправить данные или добавить их в таблицу
      console.log("Name:", name);
      console.log("Card Number:", cardNumber);
      console.log("Expiry Date:", expiryDate);
      console.log("CVC:", cvc);

      onCardData({
        name,
        cardNumber,
        expiryDate,
        cvc,
      });

      setName("");
      setCardNumber("");
      setExpiryDate("");
      setCvc("");
    } else {
      // Обновление состояний валидации если ошибка при отправке формы
      setIsNameValid(name.match(/^[A-Za-z]+ [A-Za-z]+$/));
      setIsCardNumberValid(validateCardNumber(cardNumber));
      setIsDateValid(validateExpiryDate(expiryDate));
      setIsCvcValid(cvc.length === 3);
      console.error("Validation failed");
    }
  };

  return (
    <form className={s.form}>
      <div className={s.wrapper}>
        <div className={s.wrapper__inputs}>
          <input
            placeholder="Holder of card"
            type="text"
            value={name}
            minLength="6"
            onChange={handleNameChange}
            style={{ borderColor: isNameValid ? "" : "red" }}
          />
          {!isNameValid && <p className={s.invalid_text}>Invalid name</p>}
          <input
            className={s.input_name}
            placeholder="Number of card"
            type="text"
            minLength="16"
            maxLength="16"
            value={cardNumber}
            onChange={handleCardNumberChange}
            style={{ borderColor: isCardNumberValid ? "" : "red" }}
          />
          {!isCardNumberValid && (
            <div className={s.invalid_text}>Invalid card number</div>
          )}
        </div>

        <div className={s.wrapper__input_year}>
          <input
            placeholder="MM/YY"
            type="text"
            maxLength="5"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            style={{ borderColor: isDateValid ? "" : "red" }}
          />
          {!isDateValid && <div className={s.invalid_text}>Invalid date</div>}
          {cardNumber.charAt(0) === '4' ? <RiVisaLine className={s.card} /> : cardNumber.charAt(0) === '5' ? <SiMastercard className={s.card}/> : null}
        </div>
        
      </div>

      <div className={s.image}> <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Faster_Payments_logo.svg/2560px-Faster_Payments_logo.svg.png" alt="img" />
      </div>

      <div className={s.cvc_wrapper}>
        <div className={s.deco}></div>
        <input
          placeholder="CVC"
          type="password"
          maxLength="3"
          value={cvc}
          onChange={handleCvcChange}
          style={{ borderColor: isCvcValid ? "" : "red" }}
        />
        {!isCvcValid && <div>Invalid CVC</div>}

      </div>

      <button onClick={handleSend}>Send</button>
    </form>
  );
}
