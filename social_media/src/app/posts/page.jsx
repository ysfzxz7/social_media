
import Link  from "next/link"

  
const response = await  fetch('https://jsonplaceholder.typicode.com/posts')
const todos = await response.json()

const res = await  fetch('https://jsonplaceholder.typicode.com/users')
const users = await res.json()


export default async function Posts() {

    const getUserName = (userId) => {
        const user = users.find((user) => user.id === userId);
        return user ? user.name : "Unknown User";
      };
    

        return (
        <div>
            <div className="border relative  flex justify-center space-x-1 h-[95vh]    space-y-3 flex-wrap p-3">
            <h1 className=""></h1>
            {
            todos.map(todo =>(
                    <Link href={`posts/${todo.id}`}  className=" px-4 border w-[32%] bg-slate-400/5 p-5 shadow-md rounded ">
                        <div className=" space-y-3">
                            <h1 className="w-fit items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 ">{getUserName(todo.userId)}</h1>
                            <h2 className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{todo.title}</h2>
                            <p className="text-xs my-3">{todo.body}</p>
                            <div class=" text-white bg-bleu-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded text-xs px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  w-fit">Read more</div>
                        </div>
                    </Link>
                ))}
        </div>

    
        </div>
    )
}