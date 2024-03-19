import React from 'react'

export default function Math() {
  return (
    <div className='mx-auto max-w-4xl'>
        <div className='my-10 mx-10'>
            Math is the language of the universe.
        </div>
        <ul className='list-disc pl-10'>
              <li><a href = '/math/algebra' className="hover:text-blue-500">Algebra</a></li>
              <li><a href = '/math/calculus' className="hover:text-blue-500">Calculus</a></li>
              <li><a href = '/math/statistics' className="hover:text-blue-500">Statistics</a></li>
              <li><a href = '/math/probability' className="hover:text-blue-500">Probability</a></li>
              <li><a href = '/math/discrete' className="hover:text-blue-500">Discrete Math</a></li>
              <li><a href = '/math/linalg' className="hover:text-blue-500">Linear Algebra</a></li>
          </ul>
    </div>
  )
}
