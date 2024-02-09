import Link from "next/link";



const response = await fetch("https://jsonplaceholder.typicode.com/albums")
const albums = await response.json();
const res = await  fetch('https://jsonplaceholder.typicode.com/users')
const users = await res.json()

const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };



export default async function Photos(){


    return(
        <div>
            <h1 className="border-t-2 p-5 bg-slate-100">This is photos page : </h1>
           <div className="flex flex-wrap space-x-4 items-center justify-center space-y-2 bg-slate-100  px-5 ">
           {
            albums.map((album)=>( 
                <Link key={album.id} href={`albums/${album.id}`}>
                <div className="border p-5 shadow rounded space-y-3 bg-white">
                    <h1 className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-600 dark:text-green-100 w-fit">{getUserName(album.userId)}</h1>
                    <h1 className="text-sm">{album.title}</h1>
                </div>
                
                </Link>
            ))
           }
            </div>
        </div>
    )
}