



export default async function Articals() {


const res = await fetch("https://jsonplaceholder.typicode.com/users")
const users = await res.json()

    return (
        <div className="w-[35%] rounded bg-zinc-600/5 ring-1 mx-auto mt-10 border p-5 ">
            <h1 className="text-xl font-bold  ">all users</h1>
            {
                users.map((user)=>(
                    <div key={user.id} className=" flex flex-row justify-between items-center space-y-2 border-b-2 ">
                        <h1 className="bg-gray-300 w-10 text-center h-10 font-medium flex items-center justify-center text-white rounded-[100%]">{user.name.substring(0,2).toUpperCase()}</h1>
                        <div className="w-[80%]">
                            <h1 className="text-sm font-medium truncate">{user.name}</h1>
                            <p class="text-sm text-gray-500 truncate ">{user.email}</p>
                        </div>
                        <h1 className="bg-[rgba(63,131,248,.5)]">{user.id}</h1>
                    </div>
                ))
            }
        </div>
    )
}