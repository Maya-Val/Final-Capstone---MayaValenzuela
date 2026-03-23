import Findbooks from "./Findbooks.jsx";
import ButtonLink from "../components/ButtonLink";
import Headline from "../components/Headline";

function Home() {
  
  return (
    <div>
      
      <Headline words="Home Page"/>
      <ButtonLink option="blue" name="Find books"/>
      <br></br>
      <ButtonLink option="green"name="Profile"/>
      <br></br>
      <ButtonLink option="bob" name="Suggestions"/>
    </div>

  );
}

export default Home;


    // BLUE "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5";
