function purpose (goal){
    if (goal=="center"){
        return("text-center border-solid border-2 m-2");
    }
    else if(goal=="description"){
        return("");
    }
    else{
        return ("w-full border-2");
    }

}

function TextBlock({words, goal}){
    const happen = purpose(goal)
    return(
        <div className={happen}>
            {words}
        </div>
    );
}
export default TextBlock;