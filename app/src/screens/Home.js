import { Wallet } from "ethers"
import { useState } from "react"
import Navbar from "../components/Navbar"
export default function Home(){
    const [tickets, settickets] = useState([{'id':'1','img':'https://images.unsplash.com/photo-1551829142-d9b8cf2c9232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80','name':'Ticket 1', 'description':'D.C Cherry Blossoms'}])
    const [events, setevents] = useState([{'id':'1','img':'https://images.unsplash.com/photo-1551829142-d9b8cf2c9232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80','name':'Cherry Blossoms', 'description':'D.C Cherry Blossoms','price':'10'}])
    const [reseller, setreseller] = useState([{'id':'1','img':'https://images.unsplash.com/photo-1551829142-d9b8cf2c9232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80','name':'Cherry Blossoms', 'description':'D.C Cherry Blossoms','price':'12'}])
    return(
        <>
        <Navbar/>


        <input type="checkbox" id="my-modal-6" class="modal-toggle"/>
        <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Resell</h3>
            <div class="form-control">
            <label class="label">
                <span class="label-text">Price</span>
            </label>
            <input type="text" placeholder="Price ($)" class="input input-bordered"/>
            </div>
            <div class="modal-action">
            <label for="resell" class="btn">RESELL</label>
            </div>
        </div>
        </div>
        <body>
        <div className="p-10">
            <h3 className="font-bold text-xl p-4">Your Tickets</h3>
        {tickets.map((ticket)=>(<div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={ticket.img} alt={ticket.name} /></figure>
        <div class="card-body">
            <h2 class="card-title">{ticket.name}</h2>
            <p>{ticket.description}</p>
            <div class="card-actions justify-end">
            <label for="resell" class="btn modal-button">RESELL</label>
            </div>
        </div>
        </div>))}

        <h3 className="font-bold text-xl p-4">Resellers</h3>
        {events.map((event)=>(<div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={event.img} alt={event.name} /></figure>
        <div class="card-body">
            <h2 class="card-title">{event.name}</h2>
            <p>{event.description}</p>
            <div class="card-actions justify-between">
            <h2 class="text-3xl font-bold">${event.price}</h2>
            <button class="btn btn-primary">Buy</button>
            </div>
        </div>
        </div>))}

        


        <h3 className="font-bold text-xl p-4">Events Nearby</h3>
        {events.map((event)=>(<div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={event.img} alt={event.name} /></figure>
        <div class="card-body">
            <h2 class="card-title">{event.name}</h2>
            <p>{event.description}</p>
            <div class="card-actions justify-between">
            <h2 class="text-3xl font-bold">${event.price}</h2>
            <button class="btn btn-primary">Buy</button>
            </div>
        </div>
        </div>))}
        </div>
        </body>
</>
    )
}