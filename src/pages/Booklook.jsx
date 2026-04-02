//import stuff for page layout
import Headline from "../components/Headline";
import Photo from "../components/Photo";
import TextBlock from "../components/TextBlock";
import ButtonLink from "../components/ButtonLink";
//import possible photos
import vegetarian from "../assets/thevegetarian.png";
import placeholderpic from "../assets/perriwinklescreenshot.png"


function Booklook(){
    return(
        <section>
           
                <Headline words="The Vegetarian by Han Kang"/>
            <div className="columns-2 object-center">
                <Photo picName={vegetarian} alternative="book" goal="book"/>
                <TextBlock 
                    goal="description"
                    words="Before the nightmares began, Yeong-hye and her husband lived an ordinary, controlled life. 
                            But the dreams—invasive images of blood and brutality—torture her, driving Yeong-hye to purge her mind and renounce eating meat altogether. 
                            It’s a small act of independence, but it interrupts her marriage and sets into motion an increasingly grotesque chain of events at home. 
                            As her husband, her brother-in-law and sister each fight to reassert their control, Yeong-hye obsessively defends the choice that’s become sacred to her. 
                            Soon their attempts turn desperate, subjecting first her mind, and then her body, to ever more intrusive and perverse violations, sending Yeong-hye spiraling into a dangerous, bizarre estrangement, not only from those closest to her, but also from herself.
                            
                            (taken from the back of the book)"/>
            </div>
                <ButtonLink option="pink" name="write review"/>
                <Headline words="Past Reviews"/>
            <div className="columns-2 size-fit"> 
                <Photo picName={placeholderpic} alternative="profile" goal="profile"/>
                <TextBlock
                    goal="description" 
                    words ="This book made me realize that I find well written descriptions of gore to be far more disturbing than actual gory images. 
                            At certain points while reading it, I got that grip strength loosing sensation in my arms. 
                            The book is written outside of many horror-genera tropes, but I would say it is frightening in the same way I imagine the Handmaids Tale to be. 
                            (Although, I have yet to actually read that book) "/>
            </div>
           
        </section>            
    );
}

export default Booklook;