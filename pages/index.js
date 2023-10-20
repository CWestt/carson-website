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
          Objection Handling
        </h1>
        <p className="text-lg mb-8">
          "Process: Active listening - Repeat back what you hear - Validate concern - Follow up question - Social proof (how we help)" 
        </p>
      </section>
      <div className="w-full pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "No Authority"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "Totally understand - (confirm role) wanted to get your perspective specifically as you'd have a 'boots on the ground' perspective then if it makes sense we can loop in other folks"
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "No Budget"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "I understand - rarely do we have conversations that immediately lead to purchasing, typically it takes numerous conversations - might be beneficial to start the convo now to see if it even makes sense to evaluate when budget opens"
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "Send Email"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "Happy to send over an email but I assume your inbox is flooded - would you be interested in me sending over an interactive product tour - that way you can poke around yourself?"
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "Not Interested"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "No worries - I know I'm probably catching you at a busy time, just curious if your not interested because you have something in place? (get to the Why)"
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "Lack of Urgency/Not Important"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "Totally get it - curious if this is because you have another project that's taking up most your bandwidth?"
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "Set on Self-Hosting"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "I hear ya, no worries and for some context we've helped other folks who have invested in setting up and maintaining infra themselves - however instead of hosting they leverage us for pre-prod workflow - worth exploring?"
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "Highly Technical Objection"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "What I'm hearing is ___ am I following? Gotcha, would love to loop you into a convo with a SE & product expert as I'm not the most technical - would you be open to that?"
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "Bad Timing/Call Back Later"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "No worries and pardon the interruption - curious when would be a better time to chat for no more than ~5 minutes? (Try to set-up 5 min calendar play)"
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "How'd You Get My Number?"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "Apologies I know I'm catching you out of the blue here but we use a tool called LeadIQ that pulls your contact from LI and reason for the call is I noticed (personalization)..."
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "Using Competitor"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "No worries! Curious how the developer experience has been so far on the platform say on a scale of 1 to 10, 10 being the best? What what you need to get to a 10?"
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "Personal Use Only"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "Glad to hear! That was actually why I was reaching out, since you're already familiar with the value of Vercel - curious if you have ever consider leveraging it for a project at (company)."
          </p>
        </div>
        <div className="group bg-gray-800 rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            "In a Meeting"
          </h3>
          <p className="text-gray-400 group-hover:block hidden">
            "Ohh! Apologies for the interruption - I'll be brief, reason for the call (personalization) but happy to chat when you're not in the middle of something - when could we chat for 5 min?"
          </p>
        </div>
      </div>
    </div>
  )
}


