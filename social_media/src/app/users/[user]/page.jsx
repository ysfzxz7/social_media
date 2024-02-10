


export default async function User({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.user}`)
    const user = await response.json()
    console.log(user);
    return(
        <div className="border bg-white h-full space-y-5 w-[60%] flex flex-col justify-center items-center shadow-lg ">
                <div className="bg-gray-400 font-bold w-16 h-16 rounded-full flex items-center justify-center">
                    <h1>{user.name.substring(0,2).toUpperCase()}</h1>
                </div>
                <h1 className="uppercase font-semibold flex">
                    {user.name}
                <svg className="w-6 h-6 text-blue-700 dark:text-white ml-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z" clip-rule="evenodd"/>
                    </svg></h1>
                <div className="text-center">
                <h1>{user.username}</h1>
                <h1 className="border rounded-sm px-2 bg-green-100 text-xs font-medium shadow" >{user.email}</h1>
                
                </div>
                <div>
                    <h1>{user.address.street}</h1>
                    <h1>{user.address.suite}</h1>
                    <h1>{user.address.city}</h1>
                    <h1>{user.address.zipcode}</h1>
                </div>
                <div>
                    <h1 className="bg-gray-200 shadow rounded border flex px-2 ">
                    <svg class="w-6 h-6 text-blue-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z"/>
                    </svg>
        
                        {user.phone}</h1>
                    <a href={user.website}>{user.website}</a>

                </div>
                <div>
                    <h1>Company</h1>
                    <div>
                        <h1>{user.company.name}</h1>
                        <h2>{user.company.catchPhrase}</h2>
                        <h2>{user.company.bs}</h2>

                    </div>
                </div>
        </div>
    )
}