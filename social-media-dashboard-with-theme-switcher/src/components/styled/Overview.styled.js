import { styled } from "styled-components";
import { Label } from "./Header.styled";
import { Counter, Trend, Item, Container } from "./Dashboard.style";

const Heading = styled.h2`
  font-size: var(--fs-600);
  color: ${(props) =>
    props?.$theme === "light" ? "var(--dark-grayish-blue-text)" : props.theme.accentColor};
  margin-bottom: 24px;
`;

const ItemLabel = styled(Label)`
  font-size: var(--fs-400);
`;

const ItemCounter = styled(Counter)`
  font-size: var(--fs-700);
`;

const ItemTrend = styled(Trend)`
  gap: 4px;
  justify-content: initial;
  align-self: flex-end;
  justify-self: flex-end;
`;

const OverviewItem = styled(Item)`
  text-align: initial;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  row-gap: 24px;
  padding-inline: 32px;

  & > svg {
    justify-self: flex-end;
  }
`;

const ItemContainer = styled(Container)`
  padding-bottom: 48px;
`;

export { ItemLabel, ItemCounter, ItemTrend, OverviewItem, ItemContainer, Heading };
