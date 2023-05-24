import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

const BlogsPage = ()=>{

    const [blogs, setBlogs] = useState(null);

    useEffect(()=>{
        const fetchBlogs = async() =>{
            const response = await fetch('/api/blogs')
            const json = await response.json()

            if(response.ok){
                setBlogs(json)
            }
        }
        fetchBlogs()
    },[])

    return(
        <>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2rem"}}>
        <Link to='/blogs/blogForm'><button className="post-button">Post Something</button></Link></div>
        <div className='blog-section' style={{marginTop:'2rem'}}>
        {blogs && blogs.map((blog)=>(
            <Cards key={blog._id} blog={blog} />
        ))}
        </div>
        </>
    )
}

export default BlogsPage;