import { useState } from "react";
import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom'

export default function NewEvent(){
    const [create, setcreate] = useState(false)
    const [events, setevents] = useState([{'id':'1','img':'https://images.unsplash.com/photo-1551829142-d9b8cf2c9232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80','name':'Cherry Blossoms', 'description':'D.C Cherry Blossoms','attendees':'10'}])
    return(
        <>
        <Navbar/>

        <div className="p-10">
        <h3 className="font-bold text-xl p-4">Create a New Event</h3>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Title</span>
          </label>
          <input type="text" placeholder="Event Title" class="input input-bordered"/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <input type="textarea" placeholder="Event Description" class="input input-bordered"/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Price</span>
          </label>
          <input type="text" placeholder="Ticket Price ($)" class="input input-bordered"/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Venue Capacity</span>
          </label>
          <input type="text" placeholder="Venue Capacity" class="input input-bordered"/>
        </div>
        <div class="form-control mt-6">
          <button onClick={()=>setcreate(true)} class="btn btn-primary">Create</button>
        </div>
        {create&&<div class="alert alert-success shadow-lg mt-5">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Event created successfully</span>
        </div>
        </div>}
        </div>
        </>
    )
}