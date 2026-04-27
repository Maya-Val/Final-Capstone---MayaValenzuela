import ButtonLink from "./ButtonLink";
import UserWrite from "./UserWrite";
import {Link} from "react-router-dom";

function BrowseInput({title,search,setSearch}){
   
    
    return(
        <section>
            <div className="text-center border-2 m-2 bg-violet-200">
                
                <p>{title}</p>
                <input
                className= "border-2"
                type="text"
                placeholder="input search term here"
                value= {search}
                onChange={(event) => setSearch(event.target.value)}
                />
                <Link to= "/booklook"> <ButtonLink option="purple" name="Submit"/> </Link>
            </div>
        </section>
    );
}

export default BrowseInput;