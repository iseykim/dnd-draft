import Card from "./Card"
import { useDrop } from "react-dnd"

export default function Box({ card, moveCard }: { card?: boolean; moveCard: () => void }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: () => moveCard(),
    collect: (m) => ({
      isOver: m.isOver(),
    }),
  }))

  return (
    <div
      ref={drop}
      className={`w-[200px] h-[200px] bg-gray-500 text-white flex justify-center items-center mr-4 ${
        isOver && "bg-gray-700"
      }`}
    >
      {card ? <Card /> : "Box"}
    </div>
  )
}
