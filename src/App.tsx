import { Link } from "react-router-dom"

function App() {
  return (
    <div>
      <Link to={"/chat"}>
        <button type="button">Start Enrollment</button>
      </Link>
    </div>
  )
}

export default App
