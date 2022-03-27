import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Organizer(){
    const [events, setevents] = useState([{'id':'1','img':'https://images.unsplash.com/photo-1551829142-d9b8cf2c9232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80','name':'Cherry Blossoms', 'description':'D.C Cherry Blossoms','attendees':'10'}])
    return(
        <>
        <Navbar/>

        <div className="p-10">
        <h3 className="font-bold text-xl p-4">Your Statement</h3>
        <div className="flex flex-row justify-between gap-4">
        <article class="relative px-6 pt-12 pb-6 bg-info rounded-lg shadow-sm w-full h-40 float-left">
        <p class="text-sm font-medium text-base-100">Sales</p>

        <p class="inline-flex items-end mt-1">
            <span class="text-2xl font-medium leading-none text-base-100">$240.94</span>
            <span class="ml-1 text-xs text-neutral">from $404.32</span>
        </p>

        <p class="absolute inline-flex p-1 text-red-600 bg-red-100 rounded top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>

            <span class="ml-1.5 text-xs font-medium">
            67.81%
            </span>
        </p>
        </article>

        <article class="relative px-6 pt-12 pb-6 bg-success rounded-lg shadow-sm mt-0 w-full h-40 float-right">
        <p class="text-sm font-medium text-base-100">Royalties</p>

        <p class="inline-flex items-end mt-1">
            <span class="text-2xl font-medium leading-none text-base-100">$404.32</span>
            <span class="ml-1 text-xs text-neutral">from $240.94</span>
        </p>

        <p class="absolute inline-flex p-1 text-green-600 bg-green-100 rounded top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>

            <span class="ml-1.5 text-xs font-medium">
            67.81%
            </span>
        </p>
    </article>
</div>

<h3 className="font-bold text-xl p-4">Your Events</h3>
<div>
<button className="btn ghost flex float-right">Host another event</button>
        {events.map((event)=>(<div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={event.img} alt={event.name} /></figure>
        <div class="card-body">
            <h2 class="card-title">{event.name}</h2>
            <p>{event.description}</p>
            <div class="card-actions justify-between">
            <h2 class="text-2xl font-bold">{event.attendees} Attendees Confirmed</h2>
            </div>
        </div>
        </div>))}
        </div>
        </div>
        </>
    )
}