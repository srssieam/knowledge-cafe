import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark}) => {  // receiving handleAddToBookmark function from App.jsx
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
                        <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark}></Blog>  //send handleAddToBookmark function to Blog.jsx
                    )
                })
            }
        </div>
    );
};

export default Blogs;