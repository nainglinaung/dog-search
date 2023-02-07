import React from 'react'

function Dog({dog}) {
  return (
    <div>{JSON.stringify(dog)}</div>
  )
}

export default Dog