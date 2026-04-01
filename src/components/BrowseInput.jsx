import ButtonLink from "./ButtonLink";
import UserWrite from "./UserWrite";
import {Link} from "react-router-dom";

function BrowseInput({title}){
    return(
        <section>
            <div className="text-center border-2 m-2 bg-violet-200">
                <p>{title}</p>
                <UserWrite/>
                <Link to= "/booklook"> <ButtonLink option="purple" name="Submit"/> </Link>
            </div>
        </section>
    );
}

export default BrowseInput;