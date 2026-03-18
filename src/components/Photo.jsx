import placeholdertitle from ""

function Photo({picName, alternative}){
    return(
        <div>
            <img src={picName} alt={alternative}/>
        </div>
    );
}

export default Photo;