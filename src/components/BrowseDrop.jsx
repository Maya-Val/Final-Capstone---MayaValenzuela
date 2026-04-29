import ButtonLink from "./ButtonLink";
import {Link} from "react-router-dom";


function BrowseDrop({title, choose, setChoose}){
    
    //   const allBooks = [
    //           {"id":0, "author": "Han Kang", "title":"The Vegetarian", "genera":"horror" },
    //           {"id":1, "author": "Mark Dunn", "title":"Ella Minnow Pea", "genera":"humour"},
    //           {"id":2, "author": "Erin Morgenstern", "title":"The Night Circus", "genera":"fantasy"}
    //       ]
    return(
        <section>
            <div className="text-center border-2 m-2 bg-violet-200">
                <p>{title}</p>
                <select className="static" value={choose} onChange={() => setChoose(event.target.value)}>
                    <option value="">Select Option</option>
                    <option value="non-fiction"> Non-Fiction</option>
                    <option value="biography">Biography</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="scifi">Sci-Fi</option>
                    <option value="classics">Classics</option>
                    <option value="romance">Romance</option>
                    <option value="poetry">Poetry/Novels in Verse</option>
                    <option value="dystopian">Dystopian</option>
                    <option value="realistic">Realistic</option>
                    <option value="mystery">Mystery</option>
                    <option value="supernatural">Supernatural</option>
                    <option value="nonEnglish">Non-English</option>
                    <option value="humour">Humour</option>
                    <option value="cookbooks">CookBooks</option>
                    <option value="graphicNovels">Graphic Novels</option>
                    <option value="manga">Manga</option>
                    <option value="alphabetical">All books (Alphabetical)</option>

            
                    
                </select>
                <Link to= "/booklook"> <ButtonLink option="purple" name="Submit"/> </Link>
            </div>

            
        </section>
    );
}

export default BrowseDrop;