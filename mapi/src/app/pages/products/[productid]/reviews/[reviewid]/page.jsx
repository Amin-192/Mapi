import React from 'react'

export default function page({params}) {
  return (
    <div>
      review {params.reviewid} for {params.productid}
    </div>
  )
}
