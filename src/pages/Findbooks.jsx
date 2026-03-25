
import Headline from "../components/Headline"
import BrowseDrop from "../components/BrowseDrop";
import BrowseInput from "../components/BrowseInput";

function Findbooks() {
  return(
    <div>
      <Headline words="Find Books"/>
      <BrowseDrop title="Browse based on location"/>
      <BrowseInput title="Browse based on Reviewer"/>
      <BrowseInput title="Browse based on Author"/>
      <BrowseInput title="Search Specific Book Title"/>

    </div>
  );
}

export default Findbooks;
