import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TreCard from "./TreCard";

export default {
  title: "Components/Atom/TreCard",
  component: TreCard,
} as ComponentMeta<typeof TreCard>;

const Template: ComponentStory<typeof TreCard> = (args) => (
  <TreCard {...args} />
);

export const VariantCard = Template.bind({});

VariantCard.args = {
  cardTitle: "Create Segment",
  cardText:
    "Create custom segments using rule-based approach or Behavioral segments using Unsupervised ML or segments based on prior campaign response.",
  backgroundColor: "#f0f8ff",
  buttonSize: "sm",
  buttonVariant: "primary",
  buttonLabel: "Create",
};
