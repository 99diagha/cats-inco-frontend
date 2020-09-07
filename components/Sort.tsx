import { Order } from 'pages'

type Props = {
  active: Order
  onChange: (order: Order) => void
}

const Sort = ({ active, onChange }: Props) => {
  return (
    <div className="flex flex-wrap justify-center items-center space-x-2">
      <span className="text-lg font-semibold mb-2 sm:mb-0">Sort by:</span>
      <div className="flex justify-center border-2 rounded-md shadow-sm divide-x-2 text-lg">
        <button
          onClick={() => onChange(Order.None)}
          className={`py-1 px-3 rounded rounded-r-none focus:outline-none focus:shadow-outline ${
            active === Order.None && 'bg-gray-200'
          }`}
        >
          None
        </button>
        <button
          onClick={() => onChange(Order.Descending)}
          className={`py-1 px-3 focus:outline-none focus:shadow-outline ${
            active === Order.Descending && 'bg-gray-200'
          }`}
        >
          Much cute 😻
        </button>
        <button
          onClick={() => onChange(Order.Ascending)}
          className={`py-1 px-3 rounded rounded-l-none focus:outline-none focus:shadow-outline ${
            active === Order.Ascending && 'bg-gray-200'
          }`}
        >
          Not cute 😿
        </button>
      </div>
    </div>
  )
}

export default Sort
