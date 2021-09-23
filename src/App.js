import BookContextProvider from "./context/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";

const App = () => {
  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
      <NewBookForm />
    </BookContextProvider>
  );
};

export default App;
