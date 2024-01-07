import Photosnap from "../assets/photosnap.svg";
import Manage from "../assets/manage.svg";
import Account from "../assets/account.svg";
import MyHome from "../assets/myhome.svg";
import LoopStudios from "../assets/loop-studios.svg";
import FaceIt from "../assets/faceit.svg";
import Shortly from "../assets/shortly.svg";
import Insure from "../assets/insure.svg";
import Eyecam from "../assets/eyecam-co.svg";
import AirFilter from "../assets/the-air-filter-company.svg";
import JobListingElement from "./JobListingElement";
import styles from "./Jobs.module.css";
import { useCallback, useMemo, useState } from "react";
import FilterTab from "./FilterTab";

export interface JobListing {
  company: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  posted: string;
  employmentType: string;
  location: string;
  role: string;
  level: string;
  languages: string[];
  tools?: string[];
  logo: string;
}

const jobListings: JobListing[] = [
  {
    company: "Photosnap",
    isNew: true,
    isFeatured: true,
    position: "Senior Frontend Developer",
    posted: "1d ago",
    employmentType: "Full Time",
    location: "USA only",
    role: "Frontend",
    level: "Senior",
    languages: ["HTML", "CSS", "JavaScript"],
    logo: Photosnap,
  },
  {
    company: "Manage",
    isNew: true,
    isFeatured: true,
    position: "Fullstack Developer",
    posted: "1d ago",
    employmentType: "Part Time",
    location: "Remote",
    role: "Fullstack",
    level: "Midweight",
    languages: ["Python"],
    tools: ["React"],
    logo: Manage,
  },
  {
    company: "Account",
    isNew: true,
    isFeatured: true,
    position: "Junior Frontend Developer",
    posted: "2d ago",
    employmentType: "Part Time",
    location: "USA only",
    role: "Frontend",
    level: "Junior",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
    logo: Account,
  },
  {
    company: "MyHome",
    isNew: true,
    isFeatured: false,
    position: "Junior Frontend Developer",
    posted: "5d ago",
    employmentType: "Contract",
    location: "USA only",
    role: "Frontend",
    level: "Junior",
    languages: ["CSS", "JavaScript"],
    logo: MyHome,
  },
  {
    company: "Loop Studios",
    isNew: false,
    isFeatured: true,
    position: "Software Engineer",
    posted: "1w ago",
    employmentType: "Full Time",
    location: "Worldwide",
    role: "Fullstack",
    level: "Midweight",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"],
    logo: LoopStudios,
  },
  {
    company: "FaceIt",
    isNew: false,
    isFeatured: false,
    position: "Junior Backend Developer",
    posted: "2w ago",
    employmentType: "Full Time",
    location: "UK only",
    role: "Backend",
    level: "Junior",
    languages: ["Ruby"],
    tools: ["RoR"],
    logo: FaceIt,
  },
  {
    company: "Shortly",
    isNew: false,
    isFeatured: false,
    position: "Junior Developer",
    posted: "2w ago",
    employmentType: "Full Time",
    location: "Worldwide",
    role: "Frontend",
    level: "Junior",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
    logo: Shortly,
  },
  {
    company: "Insure",
    isNew: false,
    isFeatured: false,
    position: "Junior Frontend Developer",
    posted: "2w ago",
    employmentType: "Full Time",
    location: "USA only",
    role: "Frontend",
    level: "Junior",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
    logo: Insure,
  },
  {
    company: "Eyecam Co.",
    isNew: false,
    isFeatured: false,
    position: "Full Stack Engineer",
    posted: "3w ago",
    employmentType: "Full Time",
    location: "Worldwide",
    role: "Fullstack",
    level: "Midweight",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
    logo: Eyecam,
  },
  {
    company: "The Air Filter Company",
    isNew: false,
    isFeatured: false,
    position: "Front-end Dev",
    posted: "1mo ago",
    employmentType: "Part Time",
    location: "Worldwide",
    role: "Frontend",
    level: "Junior",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
    logo: AirFilter,
  },
];

const JobLIstingContainer = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const onAddFilter = useCallback(
    () =>
      jobListings.filter((listing) => {
        let valuesToBeCompared = [...listing.languages, listing.role, listing.level];
        if (listing.tools) valuesToBeCompared = [...valuesToBeCompared, ...listing.tools];

        return filters.every((tag) => valuesToBeCompared.includes(tag));
      }),
    [filters]
  );

  const filteredListings = useMemo(() => (filters.length > 0 ? onAddFilter() : jobListings), [onAddFilter, filters]);

  const removeFilter = (tag: string) => {
    const newFilters = filters.filter((item) => item !== tag);
    setFilters(newFilters);
  };

  return (
    <div className={styles.container}>
      {filters.length > 0 && <FilterTab clearFilter={() => setFilters([])} removeFilter={removeFilter} filters={filters} />}
      {filteredListings.map((jobListing) => (
        <JobListingElement key={jobListing.company} jobListing={jobListing} setFilters={setFilters} />
      ))}
    </div>
  );
};

export default JobLIstingContainer;
