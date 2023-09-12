import { useEffect } from "react";
import { useState } from "react";


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
    return (
        <div>
            {blogs.length}
        </div>
    );
};

export default Blogs;