import React from 'react'

function Thead({children}) {
  return (
    <thead className='border-b border-slate-200 bg-slate-50'>
        <tr className='text-left text-xs font-semibold uppercase tracking-wide text-slate-500'>
            {children}
        </tr>
    </thead>
  )
}

export default Thead
