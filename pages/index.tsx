import { useState, useEffect } from 'react'

import Sort from 'components/Sort'
import Card from 'components/Card'

type Cat = {
  name: string
  image: string
  cutenessLevel: number
  allergyInducingFur: boolean
  livesLeft: number
}

export enum Order {
  None,
  Ascending,
  Descending,
}

const sortBy = (a: any, b: any, order: Order) => {
  switch (order) {
    case Order.Ascending:
      return a - b
    case Order.Descending:
      return b - a
    default:
      return 0
  }
}

function Home() {
  const [data, setData] = useState<Cat[]>([])
  const [order, setOrder] = useState<Order>(Order.None)

  useEffect(() => {
    fetch('http://localhost:9000')
      .then((res) => res.json())
      .then((data) => setData(data.cats))
  })

  return (
    <div className="container mx-auto p-2 text-center">
      <h1 className="text-2xl font-semibold mb-4">Cats IncorpurrateTM</h1>
      <Sort active={order} onChange={setOrder} />
      <div className="flex flex-wrap mt-4">
        {[...data]
          .sort((a, b) => sortBy(a.cutenessLevel, b.cutenessLevel, order)) // use better sorting if dealing with large data
          .map((cat, index) => (
            <Card
              img={`/images/${cat.image}`}
              name={cat.name}
              lives={cat.livesLeft}
              key={index}
            />
          ))}
      </div>
    </div>
  )
}

export default Home
