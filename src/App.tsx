import { useCallback } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { useImmer } from "use-immer"
import Box from "./Box"
import Card from "./Card"

function App() {
  const [data, setData] = useImmer([
    {
      id: 1,
      title: "First",
      cards: [
        { id: 1, description: "Random" },
        { id: 2, description: "Random2" },
      ],
    },
    {
      id: 2,
      title: "Second",
      cards: [
        { id: 3, description: "Random3" },
        { id: 4, description: "Random4" },
        { id: 5, description: "Random5" },
      ],
    },
  ])

  const addData = () => {
    setData((d) => {
      const i = 0 // swap
      const j = 2 // to be swapped
      const move = d[1].cards[i]
      d[1].cards.splice(i, 1)
      d[1].cards.splice(j, 0, move)
    })
  }

  const moveCard = useCallback((i: number) => {
    console.log(i)
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-2 bg-slate-800 h-screen">
        <h1 className="text-2xl text-white text-center">TailwindCSS Starter</h1>

        <div className="flex m-8">
          <Box moveCard={() => moveCard(0)} card />
          <Box moveCard={() => moveCard(1)} />
          <Box moveCard={() => moveCard(2)} />
        </div>
        <div className="flex justify-center">
          <button className="text-white border border-white p-2" onClick={addData}>
            Add
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          {data.map((d) => (
            <div key={d.title}>
              <h3 className="text-white text-xl font-semibold">{d.title}</h3>
              {d.cards.map((row, i) => (
                <Card key={row.id}>{row.description}</Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </DndProvider>
  )
}

export default App
