import { useEffect, useState } from "react"
import axios from "axios";
import { Backend_URL } from "../config";

 export interface Blog {
    
        "content": string,
        "title": string,
        "id": string,
        "author": {
            "name": string
        }
    

}

export const useBlogs = ()=>{
    const [Loading , setLoading] = useState(true);
    const [blogs , setBlogs] = useState<Blog[]>([]);

    try {
        useEffect(()=>{
            axios.get(`${Backend_URL}/api/v1/blog/bulk`,{
                headers :{
                    Authorization : localStorage.getItem("token")
                }
            })
            .then (response =>{
                setBlogs(response.data.blogs);
                setLoading(false);
            })
        },[])
        
    } catch (error) {
        console.log(error);
        
    }
    return {
        Loading,
        blogs
    }
}
export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${Backend_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                console.log(response.data.blog);
                
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blog
    }

}