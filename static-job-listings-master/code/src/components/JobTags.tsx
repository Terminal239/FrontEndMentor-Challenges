import styles from "./Jobs.module.css";

interface Props {
  tools?: string[];
  level: string;
  languages: string[];
  role: string;
  onTagSelect: (tag: string) => void;
}

const JobTags = ({ onTagSelect, role, level, languages, tools }: Props) => {
  return (
    <ul className={styles["job-tags"]}>
      <li>
        <button onClick={() => onTagSelect(role)}>{role}</button>
      </li>
      {tools?.map((tool) => (
        <li key={tool}>
          <button onClick={() => onTagSelect(tool)}>{tool}</button>
        </li>
      ))}
      <li>
        <button onClick={() => onTagSelect(level)}>{level}</button>
      </li>
      {languages.map((language) => (
        <li key={language}>
          <button onClick={() => onTagSelect(language)}>{language}</button>
        </li>
      ))}
    </ul>
  );
};

export default JobTags;
