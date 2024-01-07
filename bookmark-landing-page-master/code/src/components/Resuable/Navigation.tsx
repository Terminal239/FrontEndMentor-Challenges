interface Props {
  location: "header" | "footer";
}

export const Navigation = ({ location }: Props) => {
  return (
    <nav className={`navigation navigation-${location}`}>
      <ul className="navigation-list">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
