import React from "react";
import "../../../sass/tre-button/tre-button.scss";
import "../../../sass/tre-topbar/tre-topbar.scss";
import notificationImg from "../../assets/images/NotificationBell.svg";

interface TreTopbarProps {
  userName: string;
}

const TreTopbar = (props: TreTopbarProps) => {
  var avtarText: string = "";
  for (var i = 0; i < props.userName.split(" ").length; i++) {
    avtarText = avtarText + props.userName?.split(" ")[i].slice(0, 1);
  }

  return (
    <div className="tre-topbar">
      <div id={"avtar-name"} className="custom-avatar">
        <span>{avtarText}</span>
      </div>
      <div className="user-name">{props.userName}</div>
      <div style={{marginTop:'0.4rem'}}>
        <img src={notificationImg} />
      </div>
    </div>
  );
};

export default TreTopbar;
