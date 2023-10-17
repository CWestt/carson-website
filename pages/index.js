import * as React from "react"

import Image from 'next/image'
import map from '../public/map.svg'
import MyV0Component from './myV0Component'
import TestComponent from './testComponent'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OMPaMsDGY53
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              className=" h-8 w-8 text-gray-900 dark:text-white"
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
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
            <h1 className="ml-3 text-2xl font-semibold text-gray-900 dark:text-white">Vercel</h1>
          </div>
          <div className="hidden md:block">
            <nav className="space-x-10">
              <Link className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                Features
              </Link>
              <Link className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                Pricing
              </Link>
              <Link className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <section className="text-center py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Build Faster
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            A developer platform to make your ideas reality.
          </p>
          <Button
            className="mt-8 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
            variant="default"
          >
            Get started
          </Button>
        </section>
        <section className="bg-gray-50 dark:bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">Features</h3>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="px-6 pt-4 pb-8 bg-white dark:bg-gray-900 shadow rounded-lg">
                <svg
                  className=" h-12 w-12 text-gray-900 dark:text-white"
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
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m16 16-4-4-4 4" />
                </svg>
                <h4 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Feature name</h4>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">Feature description</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">Pricing</h3>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="px-6 pt-4 pb-8 bg-white dark:bg-gray-900 shadow rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Plan name</h4>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">Plan description</p>
                <Button
                  className="mt-8 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                  variant="default"
                >
                  Choose plan
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 dark:bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">FAQ</h3>
          <Accordion className="w-full mt-10" collapsible type="single">
            <AccordionItem value="item-1">
              <AccordionTrigger>Question 1</AccordionTrigger>
              <AccordionContent>Answer 1</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <svg
              className=" h-6 w-6 text-white"
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
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg
              className=" h-6 w-6 text-white"
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
            <svg
              className=" h-6 w-6 text-white"
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
          </div>
          <p className="text-sm text-gray-300">© 2023 Vercel Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

