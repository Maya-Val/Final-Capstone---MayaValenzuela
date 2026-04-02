import TextBlock from "../components/TextBlock"
import Headline from "../components/Headline"
function About(){
  return(
    <div>
      <Headline words="About"/>
      <TextBlock 
            words="Welcome to the Oakland Tech Library Website!
                    This webpage was created in hopes of making checking out books from the school library more convenient. 
                    If you have ever been indisisive over what book to check out, or were intending to read a book only to discover the library does not carry it, this website is for you! 
                    (Although, it should be noted that you can also recomend books to be checked out from here. 
                    The librarian is always trying to get student input on what patrons want to read.)" 
            goal="center"/>
    </div>

  );

}

export default About;
