import Link from "next/link"


export default async function Articals() {

const res = await fetch("https://jsonplaceholder.typicode.com/users")
const users = await res.json()

    return (
        <div className="w-[100vw] h-[95vh] bg-slate-300 flex items-center justify-center">

        <div className="w-[35%] rounded bg-white/60 ring-1 shadow-lg mx-auto  border p-5 ">
            <h1 className="font-medium">Active users</h1>
            {
                users.map((user)=>(
                    <Link key={user.id} href={`/users/${user.id}`}> 
                    <div  className="  flex flex-row justify-center  items-center space-y-3 border-t-2 ">
                        <h1 className="  user_pic mt-3 mr-5 bg-gray-400 w-10 text-center h-10 font-medium flex items-center justify-center text-white rounded-[100%]">{user.name.substring(0,2).toUpperCase()}</h1>
                        <div className="w-[80%] ">
                            <h1 className="text-sm font-medium truncate">{user.name}</h1>
                            <p class="text-sm text-gray-500 truncate ">{user.email}</p>
                        </div>
                        <h1 className="bg-[rgba(63,131,248,.5)] text-center h-6 w-6 rounded-full">{user.id}</h1>
                    </div>
                    </Link>
                ))
            }
        </div>
    
        </div>
    )
}