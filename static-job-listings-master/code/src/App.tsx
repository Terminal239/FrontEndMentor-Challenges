import JobLIstingContainer from "./components/JobLIstingContainer";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="sr-only">Static Job Listings Manager</h1>
      </header>
      <main>
        <JobLIstingContainer />
      </main>
    </>
  );
}

export default App;
