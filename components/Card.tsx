type Props = {
  img: string
  name: string
  lives: number
}

const Card = ({ img, name, lives }: Props) => {
  return (
    <div className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 py-4 px-2">
      <div className="relative" style={{ paddingTop: '100%' }}>
        <img
          src={img}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between py-2 px-3">
        <p className="font-semibold">{name}</p>
        <p className="flex items-center space-x-1">
          <span>{lives}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="red"
          >
            <path fill="none" d="M0 0H24V24H0z" />
            <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
          </svg>
          <span>left</span>
        </p>
      </div>
    </div>
  )
}

export default Card
