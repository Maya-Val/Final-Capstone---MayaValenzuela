// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import About from "./pages/About";
// import Profile from "./pages/Profile";
// import Findbooks from "./pages/Findbooks";



function ButtonLink({name,styling}){


return(
    // <div>
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

    <div>
       <button type="button" className="">{name}</button>
    </div>
);

}

export default ButtonLink;