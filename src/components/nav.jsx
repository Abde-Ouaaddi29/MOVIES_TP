import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SETSEARCH } from "../REDUX/actions";

export default function Nav(){
  const searchRef = useRef()
  
  const dispatch = useDispatch();
  const searchVal = useSelector((store) => store.search);
  // const films = useSelector((store) => store.movies.results);
  // console.log('uniqueLanguages',films)

  console.log('searchNav',searchVal)

  const handleSearch = () => {
      const searchValue = searchRef.current.value
      console.log(searchValue)
      dispatch(SETSEARCH(searchValue))
      document.querySelector('#search').value = '';
  }


  return (<>
       <nav className="bg-purple-300 flex  justify-center items-center shadow-md">
        <div className="w-10/12  flex p-4 justify-between items-center">
           {/* <div className="bg-purple-500-300 w-4/12 "> */}

             {/* <select name="lang" className="w-8/12 px-3 py-1 rounded outline-purple-300"> */}
               {/* <option value="">language</option> */}
               {/* {films && films.map((film) => {
                  return <>
                     <option key={film.id} value={film.original_language}>{film.original_language}</option>
                  </>
               })} */}

                {/* <option value="jap">jap</option>
                <option value="eng">eng</option> */}
             {/* </select> */}
           {/* </div> */}
           <div className="w-3/12 ">
              <div className="flex justify-center items-center font-bold text-xl text-purple-950 tracking-widest w-8/12 cursor-pointer">
                M <Icont/> OVIES
              </div>
           </div>
           <div className=" w-4/12 flex justify-center">
             <input ref={searchRef} className="w-8/12 rounded px-3 outline-purple-300" placeholder="search..." type="text" name="search" id="search" />
             <button onClick={handleSearch}  className="px-4 py-1 ml-1 rounded bg-purple-200 font-light tracking-tight">search</button>
           </div>
        </div>
       </nav>
       </>)
}


const Icont = () => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" className="w-10 h-10">
         <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
       </svg>
 </>
}