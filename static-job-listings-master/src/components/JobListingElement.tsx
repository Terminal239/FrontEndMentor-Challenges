import JobInfo from "./JobInfo";
import { JobListing } from "./JobLIstingContainer";
import JobTags from "./JobTags";
import styles from "./Jobs.module.css";

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
  jobListing: JobListing;
}

const JobListingElement = ({ jobListing, setFilters }: Props) => {
  const { company, isNew, isFeatured, position, posted, employmentType, location, role, level, languages, tools, logo } = jobListing;
  const jobInfo = {
    company,
    isNew,
    isFeatured,
    position,
    posted,
    employmentType,
    location,
  };

  const onTagSelect = (tag: string) => {
    setFilters((prev) => {
      if (!prev.includes(tag)) return prev.concat(tag);
      else return prev;
    });
  };

  return (
    <div className={styles["job-listing"]}>
      <div className={styles["company-logo"]}>
        <img src={logo} alt={`logo of ${company}`} />
      </div>
      <JobInfo {...jobInfo} />
      <JobTags onTagSelect={onTagSelect} role={role} level={level} languages={languages} tools={tools} />
    </div>
  );
};

export default JobListingElement;
