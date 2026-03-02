function Food (){
    const food1 ="Mango";
    const food2 ="Lychee";
    const food3 ="Pineapple";

    return (
        <div>
            <h2>My Favorite fruits</h2>
            <ul>
                <li>{food1}</li>
                <li>{food2}</li>
                <li>{food3}</li>
            </ul>
        </div>
    );
}
export default Food;