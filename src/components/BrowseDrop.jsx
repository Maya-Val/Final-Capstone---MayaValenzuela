import ButtonLink from "./ButtonLink";

function BrowseDrop({title}){
    return(
        <section>
            <div className="text-center border-2 m-2">
                <p>{title}</p>
                <select className="static">
                    <option value="nonFiction">Non-Fiction</option>
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
                <ButtonLink option="blue" name="Submit"/>
            </div>
        </section>
    );
}

export default BrowseDrop;