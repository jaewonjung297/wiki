import React from 'react'
import Navbar from "@/components/Navbar";

export default function Appendix() {
  return (
    <div>
        <Navbar />
        <h1 className='text-4xl my-5 text-center'>Appendix</h1>
        <ul className='list-disc pl-10'>
            <li><a href = "/finance">Finance</a></li>
        </ul>
    </div>
  )
}
