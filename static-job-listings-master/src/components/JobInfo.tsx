import styles from "./Jobs.module.css";

interface Props {
  company: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  posted: string;
  employmentType: string;
  location: string;
}

const JobInfo = ({ company, isNew, isFeatured, position, posted, employmentType, location }: Props) => {
  return (
    <div className={styles["job-description"]}>
      <div className={styles["job-status"]}>
        <span>{company}</span>
        {isNew && <span className={styles["tag-new"]}>New!</span>}
        {isFeatured && <span className={styles["tag-featured"]}>Featured</span>}
      </div>
      <a href="#" className={styles["job-role"]}>
        {position}
      </a>
      <div className={styles["job-info"]}>
        <span>{posted}</span>
        <span>{employmentType}</span>
        <span>{location}</span>
      </div>
    </div>
  );
};

export default JobInfo;
