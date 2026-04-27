import {useState} from  "react";

function Search(){

    const [search, setSearch] =useState(""); 

    const allBooks = [
        {"id":0, "author": "Han Kang", "title":"The Vegetarian", "genera":"horror" },
        {"id":1, "author": "Mark Dunn", "title":"Ella Minnow Pea", "genera":"humour"},
        {"id":2, "author": "Erin Morgenstern", "title":"The Night Circus", "genera":"fantasy"}
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
          

            <table className="border-2 mx-auto">
                <thead>
                    <tr>
                        <th className="border-2 p-2">Author</th>
                        <th className="border-2 p-2">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.map((book)=> (
                    <tr key={book.id}>
                        <td className="border-2 p-2">{book.author}</td>
                        <td className="border-2 p-2">{book.title}</td> 
                    </tr>
                    ))}
                </tbody>
            </table> 
            }
             
        </div>    
    );
}

export default Search;