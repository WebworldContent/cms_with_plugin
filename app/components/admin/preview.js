import React from 'react'
import { useSelector } from 'react-redux';

export const Preview = () => {
  const {title, content} =  useSelector(state => state.blog);

  return (
    // <main className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="m-10 p-10 w-full max-w-4xl min-h-screen bg-gray-200 shadow-lg rounded-lg">
        <div className="p-5 text-center">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          {/* <div>
            {blog.imageUrl?.length && <Image
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />}
          </div> */}
          <div className="mt-4 text-black">
          <div
            className="mt-4 space-y-2 text-black"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          </div>
        </div>
      </div>
    // </main>
  );
}
