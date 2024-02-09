

export default async function Photo({params}){
    
    const response =await fetch(`https://jsonplaceholder.typicode.com/photos/${params.photo}`)
    const photo = await response.json()
    
    return(
        <div className="flex flex-col  justify-center  mx-auto items-center  mt-10  border p-5 w-fit space-y-5 bg-gray-50 ">
            <img className="w-72" src={photo.url} alt="" srcset="" />
            <div className="flex row justify-between  border w-full">
            <h1>Photo details</h1>
            <h1>{params.photo}</h1>
            </div>
        </div>
    )

}