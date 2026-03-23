//import stuff for page layout
import Headline from "../components/Headline";
import Photo from "../components/Photo";
import TextBlock from "../components/TextBlock";
import ButtonLink from "../components/ButtonLink";
//import possible photos
import placeholdertitle from "../assets/perriwinklescreenshot.png";


function Booklook(){
    return(
        <div>
            <Headline words="Book Title and Author Here"/>
            <Photo picName={placeholdertitle} alternative="flower" goal="book"/>
            <TextBlock words="Book blurb here"/>
            <ButtonLink option="green" name="write review"/>
            <Headline words="Past Reviews"/>
            <TextBlock words ="insert past reviews here"/>
        </div>
    );
}

export default Booklook;