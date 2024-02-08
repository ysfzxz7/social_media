
export default async function Showpost({params}){
    const postId = params.post

    const response = await  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await response.json()

    const res = await  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    const comments = await res.json()

    console.log(comments)
    return (
        <div className="border  flex-col">
            <h1 className="bg-red-300 overflow-y-scroll border shadow-lg text-center p-5">Post Details :</h1>
           
                <div className="p-5  border w-[50%] m-auto mt-5 space-y-3 text-left shadow-lg rounded ">
                    

                            


                    <h2 className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{post.title}</h2>
                    <p className="indent-5 text-sm font-medium">{post.body}</p>
                </div>
                <div className="w-[50%] m-auto space-y-3" >
                <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400"></hr>

                <h1 className="w-fit  inline-flex items-center rounded-md  bg-blue-50 px-5 py-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Comments</h1>
                   {
                     comments.map((comment)=>(
                        <div className="relative border shadow-lg p-5 space-y-3 rounded pb-5">
                            <p className="font-medium">{comment.body}</p>
                            <h1 className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ">{comment.email}</h1>
                            <h1 className="absolute right-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Likes {comment.id}</h1>    
                        </div>
                        
                    ))
                   }
                   
                </div>
        </div>
        )
}