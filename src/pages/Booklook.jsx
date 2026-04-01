//import stuff for page layout
import Headline from "../components/Headline";
import Photo from "../components/Photo";
import TextBlock from "../components/TextBlock";
import ButtonLink from "../components/ButtonLink";
//import possible photos
import placeholdertitle from "../assets/thevegetarian.png";


function Booklook(){
    return(
        <section>
           
                <Headline words="Book Title and Author Here"/>
            <div className="columns-2">
                <Photo picName={placeholdertitle} alternative="flower" goal="book"/>
                <TextBlock words="Book blurb here"/>
            </div>
                <ButtonLink option="pink" name="write review"/>
                <Headline words="Past Reviews"/>
                <TextBlock words ="insert past reviews here"/>
           
        </section>            
    );
}

export default Booklook;