import React from 'react'

function OptionsTd({children}) {
  return (
    <td className='px-4 py-3'>
      <div className='flex items-center justify-end gap-1.5'>{children}</div>
    </td>
  )
}

export default OptionsTd
