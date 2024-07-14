import { Feature } from ".";
import styles from "./Features.module.css";

interface Props {
  selectedId: number;
  features: Feature[];
  onClickFeature: (id: number) => void;
}

const FeatureTabButtons = ({ features, selectedId, onClickFeature }: Props) => {
  return (
    <div>
      <ul className={styles["feature-selection-btn-container"]}>
        {features.map((feature) => (
          <li className={selectedId === feature.id ? styles.selected : ""}>
            <button key={feature.id} onClick={() => onClickFeature(feature.id)}>
              {feature.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureTabButtons;
