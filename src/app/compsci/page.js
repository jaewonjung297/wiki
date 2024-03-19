import React from 'react'

export default function CompSci() {
  return (
    <div>
        <div className='mx-auto max-w-4xl'>
          <div className='my-10 mx-10'>
            Computer Science is the study of everything about computers. It is very closely tied to math, especially regarding algorithms and computation theory.
          </div>
          <ul className='list-disc pl-10'>
              <li><a href = '/compsci/algorithms' className="hover:text-blue-500">Algorithms</a></li>
              <li><a href = '/compsci/systems' className="hover:text-blue-500">Computer Systems</a></li>
              <li><a href = '/compsci/ml' className="hover:text-blue-500">Machine Learning</a></li>
          </ul>
        </div>
    </div>
  )
}
