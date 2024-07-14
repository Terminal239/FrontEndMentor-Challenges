import { styled } from "styled-components";

const Username = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;

const Counter = styled.p`
  font-weight: 700;
  font-size: var(--fs-800);
  color: ${(props) => props.theme.accentColor};
  line-height: 1;
`;

const Label = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: var(--fs-400);
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Trend = styled.p`
  color: ${(props) =>
    (props?.$upward && "var(--lime-green)") || (props?.$downward && "var(--bright-red)")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  gap: 8px;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
`;

const Item = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.cardBgColor};
  position: relative;
  padding-block: 32px 24px;
  border-radius: 4px;
  overflow: hidden;

  &::before {
    content: "";

    background-image: ${(props) => props?.$company === "instagram" && "var(--instagram)"};
    background-color: ${(props) => selectBorderType(props?.$company)};
    position: absolute;
    top: 0;
    left: 0;

    height: 6px;
    width: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  justify-content: center;
  gap: 24px;
  margin-bottom: 60px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 275px);
  }
`;

const selectBorderType = (name) => {
  switch (name) {
    case "facebook":
      return "var(--facebook)";
    case "twitter":
      return "var(--twitter)";
    case "youtube":
      return "var(--youtube)";
  }
};

export { Username, Counter, Label, Trend, ItemHeader, Item, Container };
