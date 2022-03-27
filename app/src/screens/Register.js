import Navbar from "../components/Navbar"
import Wallet from '../assets/wallet.svg';
import { ethers } from "ethers";
import { useState } from "react";
export default function Register() {
    const [walletAddress, setwalletAddress] = useState('')
    const _connectMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      (async function () {
        let userAddress = await signer.getAddress();
        setwalletAddress(userAddress)
      })();
    };
    return(
        <>
        <Navbar/>
        <div class="hero min-h-screen bg-base-200">
            
  <div class="hero-content flex-col lg:flex-row-reverse">
  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
          <div className="form-control">
            <select class="select select-bordered">
                <option disabled selected>User type</option>
                <option>Attendee</option>
                <option>Organizer</option>
            </select>
          </div>
          {!walletAddress&&<button onClick={()=>_connectMetamask()} class="btn btn-error">Connect to Metamask</button>}
          <div class="form-control">
          <label class="label">
            <span class="label-text">Wallet Address</span>
          </label>
          <input type="text" placeholder="Not Connected" value={walletAddress} disabled class="input input-bordered"/>
        </div>
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
          <button class="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
      <div className="">
    <div class="text-center lg:text-left px-20 w-max">
      <h1 class="text-5xl font-bold">Join today!</h1>
      <p class="py-6">Manage your tickets, bla bla bla</p>
    </div>
    <img src={Wallet}></img>
    </div>
    
  </div>
</div>
</>
    )
}