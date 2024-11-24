'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import TinyEditor from './editor';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { previewBlog } from '@/app/store/previewSlice';

export const Postpage = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const blogDispatch = useDispatch()

  console.log(content);

  blogDispatch(previewBlog({ title, content }));

  // Function to generate slug from title
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(newTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/admin', {
        title: title,
        slug: slug,
        content: content,
      });

      console.log('Submission successful:', response.data);
      router.push('/blogs');
    } catch (error) {
      console.log('Error during submission:', error);
    }
  };

  return (
      <form className=" bg-white p-[2.1rem] rounded-lg shadow-lg w-full sm:w-1/2 lg:w-2/3 space-y-2">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Create Post</h2>
        <div>
          <label htmlFor="title" className="block text-sm font-extrabold text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="mt-2 p-3 border border-gray-300 rounded-md w-full text-black"
            placeholder="Enter the title"
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-extrabold text-gray-700">Slug</label>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mt-2 p-3 border border-gray-300 rounded-md w-full text-black"
            placeholder="Slug will be generated"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-extrabold text-gray-700">Content</label>
          <div id="content" className="mt-2 p-3 border border-gray-300 rounded-md w-full">
            <TinyEditor setContent={setContent} />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
  );
}
