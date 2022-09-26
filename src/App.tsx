import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { useImmer } from "use-immer"

function App() {
  const [data, setData] = useImmer([
    {
      title: "c1",
      list: [
        { id: 1, text: "hello" },
        { id: 2, text: "hola" },
      ],
    },
    { title: "c2", list: [{ id: 3, text: "hello" }] },
  ])

  const addData = () => {
    setData((d) => {
      d[0].list.push({ id: 5, text: "yahoo" })
    })
  }

  return (
    <div className="p-2 bg-slate-800 h-screen">
      <h1 className="text-2xl text-white text-center">TailwindCSS Starter</h1>

      <DndProvider backend={HTML5Backend}></DndProvider>
      <div className="flex justify-center">
        <button className="text-white border border-white p-2" onClick={addData}>
          Add
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        {data.map((d) => (
          <div key={d.title}>
            <h3 className="text-white text-xl font-semibold">{d.title}</h3>
            {d.list.map((row) => (
              <div className="text-gray-400" key={row.id}>
                {row.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
