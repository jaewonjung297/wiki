import React from 'react'

export default function Econ() {
  return (
    <div className='mx-auto max-w-4xl'>
        <div className='my-10 mx-10'>
            Economics is a social science concerned with the creation and consumption of goods and services. Economic principles are used everyday by everyone, unconsciously.
        </div>
        <ul className='list-disc pl-10'>
              <li><a href = '/econ/principles' className="hover:text-blue-500">Economic Principles</a></li>
              <li><a href = '/econ/macro' className="hover:text-blue-500">Macroeconomics</a></li>
              <li><a href = '/econ/micro' className="hover:text-blue-500">Microeconomics</a></li>
              <li><a href = '/econ/theory' className="hover:text-blue-500">Economic Theories</a></li>
          </ul>
    </div>
  )
}
