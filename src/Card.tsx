import { useDrag } from "react-dnd"

export default function Card() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    collect: (m) => ({
      isDragging: m.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`flex justify-center items-center bg-pink-200 w-full h-full ${isDragging && "bg-pink-400"}`}
    >
      Card
    </div>
  )
}
