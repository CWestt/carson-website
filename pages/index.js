import * as React from "react"

import Image from 'next/image'
import map from '../public/map.svg'
import MyV0Component from './myV0Component'
import TestComponent from './testComponent'


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/N5nP7VbEoDL
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffaf4] text-gray-900 dark:bg-[#1a202c] dark:text-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Vercel</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold mb-4">Welcome to Vercel</h2>
          <p className="text-xl mb-8">
            Deploy web projects with the best frontend developer experience and highest end-user performance.
          </p>
          <Button className="px-6 py-3 bg-[#333] text-white rounded-md">Get Started</Button>
        </section>
        <section className="container mx-auto px-4 py-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex space-x-4">
            <svg
              className=" h-6 w-6 text-[#333]"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <div>
              <h3 className="text-2xl font-bold mb-2">Feature 1</h3>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <svg
              className=" h-6 w-6 text-[#333]"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <div>
              <h3 className="text-2xl font-bold mb-2">Feature 2</h3>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <svg
              className=" h-6 w-6 text-[#333]"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <div>
              <h3 className="text-2xl font-bold mb-2">Feature 3</h3>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-20 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-[#ddd] rounded-md p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-8">$0</p>
            <Button className="px-6 py-3 bg-[#333] text-white rounded-md">Select Plan</Button>
          </div>
          <div className="border border-[#ddd] rounded-md p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-8">$20</p>
            <Button className="px-6 py-3 bg-[#333] text-white rounded-md">Select Plan</Button>
          </div>
          <div className="border border-[#ddd] rounded-md p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-4xl font-bold mb-8">$100</p>
            <Button className="px-6 py-3 bg-[#333] text-white rounded-md">Select Plan</Button>
          </div>
        </section>
      </main>
      <footer className="bg-[#333] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <ul className="flex justify-center space-x-4 mb-8">
            <li>
              <Link href="#">
                <svg
                  className=" h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg
                  className=" h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg
                  className=" h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </li>
          </ul>
          <p className="text-sm">© 2023 Vercel Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
A
