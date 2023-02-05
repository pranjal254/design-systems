import React from "react";
import "../../../sass/tre-card/tre-card.scss";
import Button from "../Button";

interface TreCardProps {
  cardTitle: string;
  cardText: string;
  backgroundColor?: string;
  buttonSize: "sm" | "md" | "lg";
  buttonVariant:
    | "primary"
    | "secondary"
    | "disabled"
    | "cta"
    | "outline-primary"
    | "outline-secondary"
    | "outline-disabled";
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
          label={props.buttonLabel}
          onClick={() => {}}
          size={props.buttonSize}
          variant={props.buttonVariant}
        />
      </div>
    </div>
  );
};

export default TreCard;
