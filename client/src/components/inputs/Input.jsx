import React from 'react'

function Input({label, ...rest}) {
  return (
    <div className='mb-5 flex flex-col'>
        <label className='mb-1.5 text-sm font-medium text-slate-700'>{label}</label>
        <input {...rest} className='rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100'/>
    </div>
  )
}

export default Input
