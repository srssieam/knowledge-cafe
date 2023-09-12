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
        <div className="md:w-2/3">
            {blogs.length}
            <h1>Blogs here</h1>
        </div>
    );
};

export default Blogs;