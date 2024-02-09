
export default async function Showpost({params}){
    const postId = params.post

    const response = await  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await response.json()

    const res = await  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    const comments = await res.json()

    return (
        <div className="border  flex-col">
            <h1 className="bg-red-300 overflow-y-scroll border shadow-lg text-center p-5">Post Details :</h1>
           
                <div className="p-10 bg-slate-300  border w-[50%] m-auto mt-5 space-y-3 text-left shadow-lg rounded ">
                    
                    <h2 className="inline-flex items-center rounded-md bg-blue-50 px-5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{post.title}</h2>
                    <p className="indent-5 text-sm font-medium ">{post.body}</p>
                </div>
                <div className="w-[50%] m-auto space-y-3" >
                <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400"></hr>

                <h1 className="w-fit  inline-flex items-center rounded-md  bg-blue-50 px-5 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Comments</h1>
                   {
                     comments.map((comment)=>(
                        <div className="relative border shadow-lg p-5 space-y-3 rounded pb-5">
                            <p className="font-medium text-xs">{comment.body}</p>
                            <h1 className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ">{comment.email}</h1>
                            <div className="border absolute right-2 bottom-2 flex flex-row items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 w-fit ">
                            <h1 className=" ">Likes {comment.id}</h1>    
                            <svg className="w-6 h-6 text-red-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z"/>
                                </svg>
  
                        
                            </div>
                        </div>
                        
                    ))
                   }
                   
                </div>
        </div>
        )
}