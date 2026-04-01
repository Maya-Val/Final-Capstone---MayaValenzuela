import Findbooks from "./Findbooks.jsx";
import ButtonLink from "../components/ButtonLink";
import Headline from "../components/Headline";
import {Link} from "react-router-dom";

function Home() {
  
  return (
    <section>
      
      <Headline words="Home Page"/>
      <div className="columns-3 gap-1 text-center m-5">
        <Link to="/findbooks"><ButtonLink option="purple" name="Find books"/></Link>
        <br></br>
        <Link to="/profile"><ButtonLink option="pink"name="Profile"/></Link>
        <br></br>
        <Link to="/suggestions"><ButtonLink option="pink" name="Suggestions"/></Link>
      </div>
    </section>

  );
}

export default Home;


    // BLUE "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5";
