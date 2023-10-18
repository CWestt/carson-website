import * as React from "react"

import Image from 'next/image'
import map from '../public/map.svg'
import MyV0Component from './myV0Component'
import TestComponent from './testComponent'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PJAuiLMRYt6
 */
export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-gray-50">
      <section className="w-full px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
          Developer Problems
        </h1>
        <p className="text-lg mb-8">
          Deploy web projects with the best front end experience and efficient build pipeline.
        </p>
      </section>
      <div className="w-full pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Deploy
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Instantly build and deploy your sites to our global network from Git.
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Develop
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Start your project with a template or a custom stack. Clone, code, push, done.
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Explore
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Explore and interact with the most up-to-date build of your site.
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Test
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Test your application with our powerful integrated tools.
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Monitor
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Monitor the performance of your sites with detailed analytics.
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Scale
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Scale your applications with our flexible hosting options.
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Optimize
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Optimize your sites with our performance and optimization features.
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Collaborate
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Collaborate with your team with our integrated project management tools.
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Integrate
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Integrate your favorite tools and services with our powerful APIs.
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Secure
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Secure your applications with our advanced security features.
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Support
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Get support from our team of experts and online community.
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Learn
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            Learn from our comprehensive documentation and tutorials.
          </p>
        </div>
      </div>
    </div>
  )
}


