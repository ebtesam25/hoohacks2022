import { useState } from "react";
import Navbar from "../components/Navbar";

export default function NewEvent(){
    const [events, setevents] = useState([{'id':'1','img':'https://images.unsplash.com/photo-1551829142-d9b8cf2c9232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80','name':'Cherry Blossoms', 'description':'D.C Cherry Blossoms','attendees':'10'}])
    return(
        <>
        <Navbar/>

        <div className="p-10">
        <h3 className="font-bold text-xl p-4">Create a New Event</h3>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Full Name</span>
          </label>
          <input type="text" placeholder="John Doe" class="input input-bordered"/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered"/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered"/>
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <Link to="/organizer"><button class="btn btn-primary">Register</button></Link>
        </div>
        </div>
        </>
    )
}