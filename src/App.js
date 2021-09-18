import Navbar from "./components/Navbar";
import { Fragment } from "react";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
function App() {
  return (
    <Fragment>
      <div className="App">
        <ThemeContextProvider>
          <Navbar />
          <BookList />
        </ThemeContextProvider>
      </div>
    </Fragment>
  );
}

export default App;
