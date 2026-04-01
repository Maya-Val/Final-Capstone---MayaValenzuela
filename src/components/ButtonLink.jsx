import {Link} from "react-router-dom";

// set up functions
function selector(option){
    if (option =="purple"){
        return ("text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5");
    }
    else if (option =="pink"){
        return ("text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5");
    }
    else {
        return ("border-dashed border-2");
    }
}

// actual function
function ButtonLink({option,name}){

    // assume option = "blue" name = "find books"
    const type = selector(option)
    return(
        <div>
       
            <button type="button" className={type}>{name}</button>
        
        </div>
    );
}

export default ButtonLink;




// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import About from "./pages/About";
// import Profile from "./pages/Profile";
// import Findbooks from "./pages/Findbooks";


    //     <a href={location}>
    //         <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
    //             {name}
    //         </button>
    //     </a>
    // </div>

    // <div>
    //     <button>
    //         <nav>
    //             <Link to={location}>{name}</Link> 
    //         </nav>
    //         <routes>
    //             <Route path={location} element={name} />
    //         </routes>
    //     </button>
    // </div>