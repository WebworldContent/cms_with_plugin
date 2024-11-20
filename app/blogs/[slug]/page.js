'use client'

import axios from "axios";
import { useEffect, useState } from "react"
import Image from 'next/image';
import DOMPurify from 'dompurify';

export default function Page({ params }) {
  const [blog, setBlog] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { slug } = await params;
        const { data: {data: [ resData ] } } = await axios.get(`http://localhost:3000/api/blogs/${slug}`);
        console.log(resData);
        const sanitizedContent = DOMPurify.sanitize(resData.content);
        setBlog({...resData, content: sanitizedContent});
      } catch (error) {
        setError((prevError) => ({...prevError, error: error.message}));
      } finally {
        setLoading(false);
      }
    })();
  }, [params]);

  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
        <p className="text-white text-lg">Loading...</p>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
        <p className="text-white text-lg">No blog data found.</p>
      </main>
    );
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="m-10 p-10 w-full max-w-4xl min-h-screen bg-gray-200 shadow-lg rounded-lg">
        <div className="p-5 text-center">
          <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
          <div>
            {blog.imageUrl?.length && <Image
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />}
          </div>
          <div className="mt-4 text-black">
          <div
            className="mt-4 space-y-2 text-black"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
