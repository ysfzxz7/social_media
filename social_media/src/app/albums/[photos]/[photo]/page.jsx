"use client"
import { usePathname } from "next/navigation"



export default async function Photo({params}){
    

    const pathname = usePathname()
    console.log(pathname)
  
    const response =await fetch(`https://jsonplaceholder.typicode.com/photos/${params.photo}`)
    const photo = await response.json()
    
    return(
        <div className="flex flex-col  justify-center rounded  mx-auto items-center  mt-10  border p-2 w-fit space-y-5 bg-gray-400/5 ">
            <img className="w-72" src={photo.url} alt=""  />
            <div className="flex row justify-between items-center   w-full">
            <h1>Photo details</h1>
            <h1 className="flex flex-row">
            <svg className="w-6 h-6 text-red-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"/>
  </svg>    
                {params.photo}</h1>
            </div>
        </div>
    )

}