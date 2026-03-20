
function Photo({picName, alternative}){
    return(
        <div className="border-2 ">
            <img src={picName} alt={alternative}/>
        </div>
    );
}

export default Photo;