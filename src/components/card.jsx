import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function Card(){

    const films = useSelector((store) => store.movies.results);
    const imgUrl = useSelector((store) => store.BASEURL);
    const error = useSelector((store) => store.error);
    console.log(films);
    console.log('error',error);

    const sliceTiltle = (str, maxLength) => {
        if(str.length > maxLength) {
          return str.slice(0, maxLength) + '....';
        }
          return str;
    }



return <>
        {films && films.map((film) => {
             return  <>
             <Link to={`/${film.id}`} key={film.id} className="parent h-48 rounded flex-col relative shadow cursor-pointer " >
               <img src={imgUrl+film.backdrop_path} alt="img" className="absolute rounded inset-0 w-full h-full object-cover -z-10" />
                <div className="name-film w-9/12 m-auto mt-2 p-1 rounded bg-black text-center text-yellow-300 font-light border border-yellow-300 ">{sliceTiltle(film.name, 23)}</div>
                <div className="w-10/12 flex justify-between m-auto absolute bottom-5 right-6 ">
                  <span className="bg-black border border-yellow-300 px-3 flex justify-center  rounded-md text-yellow-300  font-light tracking-wider">{film.original_language}</span>
                  <span className="bg-red-700 px-2 py-1 font-semibold rounded-md text-white tracking-wider flex justify-center items-center">{film.vote_average} <span className="ml-2"><Star/></span></span>
                </div>
             </Link>
             </>
         })
     }    
     </>


}


const Star = () => {
    return <>
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-3 h-3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
</>
}


