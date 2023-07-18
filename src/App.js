import MovieList from "./components/MovieList";
import ProjectList from "./components/PorjectList";
import SimpleList from "./components/SimpleList";
import StudentList from "./components/StudentList";
import "./styles.css";
// We import other components to be able to use them inside of this component

// React Component <App />

function App() {
  return (
    <div className="App">
      {/* {<SimpleList />} */}
      {/* <StudentList /> */}
      {/* <ProjectList /> */}

      <MovieList />
    </div>
  );
}

export default App;
