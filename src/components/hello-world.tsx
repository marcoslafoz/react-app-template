import React from 'react'
import { logo } from '@/constants/assets'

export interface HelloWorldProps { }

export const HelloWorld: React.FC<HelloWorldProps> = () => {
  return (
    <div className='text-center p-6 bg-white shadow-lg rounded-xl'>
      <h1 className='text-2xl font-bold text-gray-800 mb-4'>Hello World!</h1>
      <img className='w-16 h-16 mx-auto' src={logo} alt='Hello World SVG' />
      <p className='text-sm font-bold text-gray-500 mt-4'>React + Vite + Tailwind CSS</p>
      <p className='text-sm font-bold text-gray-300 mt-2'>
        Template by <a href='https://github.com/marcoslafoz'>@marcoslafoz</a>
      </p>
    </div>
  )
}
