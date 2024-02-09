
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
            <h1 className="bg-green-600 p-3 text-center">Post page, Here you can find all Posts</h1>
        <div className="flex justify-center space-x-2  space-y-2 flex-wrap p-2">
            {
            todos.map(todo =>(
                    <Link href={`posts/${todo.id}`}  className="border w-[32%] p-5 shadow-md rounded bg-gray-100/5">
                        <div className=" space-y-3">
                            <h1 className="w-fit items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 ">{getUserName(todo.userId)}</h1>
                            <h2 className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{todo.title}</h2>
                            <p className="text-xs my-3">{todo.body}</p>
                            <div class=" text-white bg-bleu-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded text-xs px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  w-fit">Read more</div>


                        </div>
                    </Link>
                ))}
        </div>

        </div>

    )
}