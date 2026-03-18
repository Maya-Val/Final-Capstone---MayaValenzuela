import ButtonLink from "../components/ButtonLink";
import Headline from "../components/Headline"

function Suggestions(){
    return(
        <div>
            <Headline words="Make a Suggestion"/>
            <ButtonLink name="add book to collection"/>
            <br></br>
            <ButtonLink name="other request"/>
        </div>
    );

}

export default Suggestions;