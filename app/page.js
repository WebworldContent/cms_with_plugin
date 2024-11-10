'use client'

import Link from "next/link"

// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import Image from 'next/image'


export default function Home() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-cover bg-center bg-custom-back min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Knowledge Blog Place
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Create & Read blogs with WYSIWYG feature and user friendly functionality with plugins & lot more to come.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/blogs"
                className="rounded-md bg-indigo-600 px-9 py-5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Read
              </Link>
              <Link
                href="/admin"
                className="rounded-md bg-indigo-600 px-9 py-5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
