

export const metadata = {
    title : "posts",
    description : "here you can find all posts"
}

export default function Posts({children}){

    return(
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}