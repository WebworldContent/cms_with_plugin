'use client'

import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: {data: resData} } = await axios.get('http://localhost:3000/api/blogs');
        console.log(resData);
        setBlogs(resData);
      } catch (error) {
        setError((prevError) => ({...prevError, error: error.message}));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (Object.keys(error).length) {
    return (
      <p>{error.message}</p>
    );
  }

  return (
    <div className="min-h-screen bg-custom-mix py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Blog</h1>
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
          {!loading ? (blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {blog.imageUrl ? (<Image
                src={blog.imageUrl}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />) : (<Image
                src='https://picsum.photos/500'
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />)}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                <a
                  href={`/blogs/${blog.slug}`}
                  className="inline-block bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-600"
                >
                  Read More
                </a>
              </div>
            </div>
          ))) : (<p>Loading...</p>)}
        </div>
      </div>
    </div>
  );
}