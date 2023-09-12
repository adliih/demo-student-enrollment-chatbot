import { Link } from "react-router-dom"

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link to={"/chat"}>
        <button className="btn" type="button">
          Start Enrollment
        </button>
      </Link>
    </div>
  )
}

export default App
