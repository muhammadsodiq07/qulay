import React from "react";
import Delivery from "../components/Delivery/Delivery";

export default function DeliveryMain(props) {
  return (
    <div>
      <Delivery location={props.location} />
    </div>
  );
}
