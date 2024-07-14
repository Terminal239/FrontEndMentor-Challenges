import styles from "./Jobs.module.css";
import IconRemove from "../assets/icon-remove.svg";

interface Props {
  filters: string[];
  removeFilter: (tag: string) => void;
  clearFilter: () => void;
}

const FilterTab = ({ filters, clearFilter, removeFilter }: Props) => {
  return (
    <div className={styles["filters-tabs"]}>
      <ul>
        {filters.map((filter) => (
          <li key={filter}>
            {filter}
            <button onClick={() => removeFilter(filter)}>
              <img src={IconRemove} alt="remove icon" />
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clearFilter} className={styles["button-clear"]}>
        Clear
      </button>
    </div>
  );
};

export default FilterTab;
