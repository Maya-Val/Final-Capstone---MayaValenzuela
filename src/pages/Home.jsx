import Findbooks from "./Findbooks.jsx";
import ButtonLink from "../components/ButtonLink";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ButtonLink name="Find books"/>
      <br></br>
      <ButtonLink name="Profile"/>
      <br></br>
      <ButtonLink name="Suggestions"/>
    </div>

  );
}

export default Home;
