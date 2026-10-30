import React from 'react'
import {Link} from 'react-router-dom'

function EditButton({editFunction,children}) {
  return (
      <Link className='inline-flex items-center gap-1 rounded-md bg-brand-50 px-2.5 py-1.5 text-xs font-medium text-brand-700 transition hover:bg-brand-100' to={editFunction}>{children}</Link>
  )
}

export default EditButton
