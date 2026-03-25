import ButtonLink from "./ButtonLink";
import UserWrite from "./UserWrite";

function BrowseInput({title}){
    return(
        <section>
            <div className="text-center border-2 m-2">
                <p>{title}</p>
                <UserWrite/>
                <ButtonLink option="blue" name="Submit"/>
            </div>
        </section>
    );
}

export default BrowseInput;