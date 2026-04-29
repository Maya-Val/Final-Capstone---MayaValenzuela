
import Headline from "../components/Headline"
import BrowseDrop from "../components/BrowseDrop";
import BrowseInput from "../components/BrowseInput";
import {useState} from  "react";

function Findbooks() {

  const [search, setSearch] =useState(""); 
  const [choose, setChoose] =useState("")

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

  const locationfiedBooks= allBooks.filter((book)=> {
    return(
        book.genera == choose
    );

  });

  return(
    <div>
      <Headline words="Find Books"/>
      <BrowseDrop title="Browse based on location" choose={choose} setChoose={setChoose}/>
      <BrowseInput title="Search Author or Title" search={search} setSearch={setSearch}/>

      {choose !== "" && 
      <table className="border-2 mx-auto m-2">
        
                <thead>
                    <tr>
                        <th className="text-center p-2"> Books in {choose}</th>
                        <th>  </th>
                    </tr>
                    <tr>
                        <th className="border-2 p-2">Author</th>
                        <th className="border-2 p-2">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {locationfiedBooks.map((book)=> (
                    <tr key={book.id}>
                        <td className="border-2 p-2">{book.author}</td>
                        <td className="border-2 p-2">{book.title}</td> 
                    </tr>
                    
                    ))}
                    
                </tbody>
            </table> 
}

      {search !== "" &&
          

            <table className="border-2 mx-auto">
                <thead>
                    <tr>
                        <th className="text-center p-2 col-span-2"> Selected by Author/Title</th>
                        <th></th>
                    </tr>
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

export default Findbooks;
