import { Dispatch, SetStateAction } from "react";

enum ContentTabs {
  Overview = "overview",
  Structure = "structure",
  Geology = "geology",
}
interface Props {
  contentTab: ContentTabs;
  setContentTab: Dispatch<SetStateAction<ContentTabs>>;
}

const ContentTab = ({ contentTab, setContentTab }: Props) => {
  return (
    <nav className="content-tab">
      <ul className="between">
        {Object.values(ContentTabs).map((tab, index) => (
          <li key={tab} className={contentTab === tab ? "selected" : ""}>
            <button onClick={() => setContentTab(tab)}>
              <span>0{index + 1}</span> {tab.replace(tab.charAt(0), tab.charAt(0).toUpperCase())}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ContentTab;
