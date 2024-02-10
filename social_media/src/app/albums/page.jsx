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
        <div className="">
           <div className="flex flex-wrap flex-row space-x-3 space-y-3 px-3 items-center justify-center  bg-slate-100 ">
           <h1 className="border w-full px-20 py-3"> <span className="bg-blue-400 px-3 py-1  border font-medium rounded cursor-pointer"> Albums + 99 </span></h1>
           {
            albums.map((album)=>( 
                <div className=" border shadow rounded truncate w-72 bg-white p-5 space-y-5">
                <Link key={album.id} href={`albums/${album.id}`}>
                    <h1 className=" bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-600 dark:text-green-100 w-fit">{getUserName(album.userId)}</h1>
                    <h1 className="text-sm">{album.title}</h1>
                
                </Link>
                </div>
            ))
           }
            </div>
        </div>
    )
}