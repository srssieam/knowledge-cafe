import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const[blogs, setBlogs] = useState([]);
     
    useEffect(()=>{
        const loadData = async()=>{
            const response = await fetch('blog.json');
            const data = await response.json();
            setBlogs(data);
        }
        loadData()
    },[])
    console.log(blogs)
    return (
        <div className="md:w-2/3">
            {
                blogs.map( blog =>{
                    return(
                        <Blog key={blog.id} blog={blog}></Blog>
                    )
                })
            }
        </div>
    );
};

export default Blogs;