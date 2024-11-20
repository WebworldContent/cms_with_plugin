'use client'

import { Postpage } from "../components/admin/postPage";
import { Preview } from "../components/admin/preview";

export default function Form() {
  return (
  <main>
     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
        <Postpage />
        <Preview />
    </div>
  </main>);
}
