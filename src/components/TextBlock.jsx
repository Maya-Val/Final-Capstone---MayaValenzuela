function purpose (goal){
    if (goal=="center"){
        return("text-center border-solid border-2 m-2 bg-violet-200");
    }
    else if(goal=="description"){
        return("bg-violet-200 h-1/4");
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