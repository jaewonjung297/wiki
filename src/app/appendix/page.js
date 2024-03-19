import React from 'react'

export default function Appendix() {
  return (
    <div>
        <h1 className='text-4xl my-5 text-center'>Appendix</h1>
        <ul className='list-disc pl-10'>
            <li><a href = "/compsci" className="hover:text-blue-500">Computer Science</a></li>
            <li><a href = "/econ" className="hover:text-blue-500">Economics</a></li>
            <li><a href = "/finance" className="hover:text-blue-500">Finance</a></li>
            <li><a href = "/math" className="hover:text-blue-500">Mathematics</a></li>
            <li><a href = "/musictheory" className="hover:text-blue-500">Music Theory</a></li>
            <li><a href = "/science" className="hover:text-blue-500">Physical Sciences</a></li>
        </ul>
    </div>
  )
}
