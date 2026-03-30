function Table(){

    const books = [
        {id:0, 
        title:"Cat in the hat",
        author:"Dr Suess"},
        {id:1, 
        title:"I Want My Hat Back",
        author:"Jon Klassen"},
        {id:2, 
        title:"The Very Hungry Caterpillar",
        author:"Eric Carle"},
    ];

    const listBooks = books.map (book => <li>{book}</li> );
    // const titles = books.filter(book=> book.title ==="title");
    // const authors = books.filter(book=> book.author ==="author");

    return(
        <section className="items-center">


            {/* <ul>{listBooks}</ul> */}
            <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table class="w-full text-sm text-left rtl:text-right text-body">
                    <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
                        <tr>
                            <th scope="col" class="px-6 py-3 font-medium">
                                <p>Book Ttile</p>
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                <p>Author</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                               {/* <ul>{titles}</ul> */}
                               {/* {book.title} */}
                            </th>
                            <td class="px-6 py-4">
                                {/* <ul>{authors}</ul> */}
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </section>
    );
}

export default Table;


{/* <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                        </tr>
                        <tr class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                Black
                            </td>
                            
                        </tr> */}