

import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Food from "./components/Food.jsx";
import Card from "./components/Card.jsx";

function App() {

  return (

    <div>
      <Header />
      <main>
        <Food/>
        <Card/>
      </main>
      <Footer/>

    </div>

  );

}


export default App;