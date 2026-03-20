import Headline from "../components/Headline";
import Photo from "../components/Photo";
import placeholdertitle from "../assets/perriwinklescreenshot.png";
import TextBlock from "../components/TextBlock";

function Booklook(){
    return(
        <div>
            <Headline words="Book Title Here"/>
            <Photo picName={placeholdertitle} alternative="flower"/>
            <TextBlock words="Book blurb here"/>
        </div>
    );
}

export default Booklook;