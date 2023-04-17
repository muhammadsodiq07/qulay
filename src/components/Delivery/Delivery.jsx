import "./Delivery.scss";
import GET from "../../API/GET";
import user from "../../assets/icons/user.svg";
import React, { useEffect, useState } from "react";

export default function Delivery(props) {
  
  const [data, setData] = useState();
  const [username, setUsername] = useState();
  const [locationTo, setLocationTo] = useState();
  const [allowedArr, setAllowedArr] = useState([]);
  const [description, setDescription] = useState();
  const [locationFrom, setLocationFrom] = useState();
  const [userPhoneNumber, setUserPhoneNumber] = useState();

  const codeFech = async () => {
    try {
      const code = await GET.getDate(props.location);
      setData(code.data);
      setUsername(code.data.user.first_name);
      setDescription(code.data.description);
      setAllowedArr(code.data.allowed_items);
      setLocationTo(code.data.to_location.name);
      setLocationTo(code.data.from_location.name);
      setLocationFrom(code.data.from_location.name);
      setUserPhoneNumber(code.data.user.phone_number);
    } catch (err) {
      return console.error(err);
    }
  };

  useEffect(() => {
    codeFech();
  }, []);

  return (
    <section className="delivery">
      <div className="container">
        <div className="delivery__title-box">
          <div className="delivery__user-div">
            <img className="delivery__img" src={user} alt="user" />
          </div>
          <div className="delivery__title-div">
            <h2 className="delivery__title">{username}</h2>
            <p className="delivery__number">{userPhoneNumber}</p>
          </div>
        </div>
        <div className="delivery__countiry-box">
          <div className="delivery__countiry-from">
            <span className="delivery__span">Откуда:</span>
            <p className="delivery__text">{locationFrom}</p>
          </div>
          <div className="delivery__countiry-to">
            <span className="delivery__span">Куда:</span>
            <p className="delivery__text">{locationTo}</p>
          </div>
        </div>
        <div className="delivery__info-box">
          <p className="delivery__info-title">
            Стоимость вещей, которые нужно забрать:
          </p>
          <ul className="delivery__list">
            {allowedArr.map((item, index) => (
              <li className="delivery__item" key={index}>
                <img className="delivery__icon" src={item.url} alt="" />
                <p className="delivery__item-text">
                  {item.name} - {item.price}$
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="delivery__decs-box">
          <p className="delivery__decs-title">Описание</p>
          <span className="delivery__decs-span">{description}</span>
        </div>
      </div>
    </section>
  );
}
