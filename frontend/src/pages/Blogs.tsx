import React from 'react'
import { BlogCard } from '../Components/BlogCard';
import Appbar from '../Components/Appbar';
import { useBlogs } from '../hooks';

export function Blogs() {
    const {Loading , blogs}= useBlogs();
    if (Loading) {
        return (
          <div>
            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        );
      }
  return (
    <div>
      <Appbar/>  
      <div className='flex justify-center'>
            <div >
                {blogs.map(blog => <BlogCard
                    key={blog.id}
                    id={blog.id}
                    // authorName={blog.author.name || "Anonymous"}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}  
            </div>
        </div>
  </div>
)}