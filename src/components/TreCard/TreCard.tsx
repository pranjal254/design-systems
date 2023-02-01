import React from "react";
import "../../../sass/tre-card/tre-card.scss";
import Button from "../Button";

interface TreCardProps {
  cardTitle: string;
  cardText: string;
  backgroundColor?: string;
  buttonSize: string;
  buttonVariant: string;
  buttonLabel: string;
  onClick?: () => void;
}

const TreCard = (props: TreCardProps) => {
  return (
    <div
      className="cardItems"
      style={{ backgroundColor: props.backgroundColor || "transparent" }}
    >
      <div className="cardTitle">{props.cardTitle}</div>
      <div className="cardText">{props.cardText}</div>
      <div className="cardFooter">
        <Button
          label="Analyze"
          onClick={() => {}}
          size="sm"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default TreCard;
