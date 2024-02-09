
import Link from "next/link";




export default async function Photos({params}){
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/`)
    const photos = await response.json()
    
    const getPhotos = photos.filter((photo) => photo.albumId === parseInt(params.photos));
     
    return(
        <div className="flex bg-gray-50 justify-center  flex-wrap p-y-5 space-x-3 space-y-5">
           <h1 className="border w-full px-20 py-3"> <span className="bg-blue-400 px-3 py-1  border font-medium rounded cursor-pointer"> Albums : </span></h1>
           {
            getPhotos.map((photos)=>(
                <div key={photos.id} className="min-h-10 border p-5 shadow-md w-[20%] rounded ">
                    <Link className="flex flex-col  justify-center items-center space-y-5" href={`/albums/photos/${photos.id}`}>

                    <img  className="w-32" src={photos.url}  alt="" srcset="" />
                    <h1 className=" text-center text-xs"> <span className="bg-yellow-200 ring-1 rounded-md px-2 text-gray-900">Album Title</span> : {photos.title}</h1>

                    </Link>
                </div> 
            ))
           }
        </div>
    )
}