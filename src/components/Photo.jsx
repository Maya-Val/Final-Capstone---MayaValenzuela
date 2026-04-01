
function purpose (goal){
    if (goal=="book"){
        return(" border-2");
    }
    else if(goal=="profile"){
        return("rounded-full border-2 size-20 m-2");
    }
    else{
        return ("w-full border-2");
    }

}

function Photo({picName, alternative, goal}){
    const happen = purpose(goal)
    return(
        <div>
            <img className={happen} src={picName} alt={alternative}/>
        </div>
    );
}

export default Photo;