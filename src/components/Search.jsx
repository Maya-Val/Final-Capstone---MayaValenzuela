import {useState} from  "react";

function Search(){

    const [search, setSearch] =useState(""); 

    const allBooks = [
        {"id":0, "author": "Han Kang", "title":"The Vegetarian"},
        {"id":1, "author": "Mark Dunn", "title":"Ella Minnow Pea"},
        {"id":2, "author": "Erin Morgenstern", "title":"The Night Circus"}
    ]

    const filteredBooks= allBooks.filter((book)=> {
        const lowerSearch= search.toLowerCase();
        return(
            book.title.toLowerCase().includes(lowerSearch)|
            book.author.toLowerCase().includes(lowerSearch)
        );
    }); 

    return(
        <div>
            <input
            className= "border-2"
            type="text"
            placeholder="input search term here"
            value= {search}
            onChange={(event) => setSearch(event.target.value)}
            />

            {search !== "" &&
            filteredBooks.map((book)=> (
                <div key ={book.id}>
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                </div>
            ) )}  
{/*  Go to 17:05 */}
            <table className="border-2">
                <thead>
                    <tr>
                        <th className="border-2">Author</th>
                        <th className="border-2">Title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-2">a</td>
                        <td className="border-2">b</td> 
                    </tr>
                </tbody>
            </table> 
             
        </div>    
    );
}

export default Search;