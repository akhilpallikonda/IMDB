import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SelectedMovies from "./components/SelectedMovies";
import GraphArea from "./components/GraphArea";
import ModalContent from "./components/ModalContent";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addToSelectedMovies = (movie) => {
    if (!selectedMovies.find((item) => item.imdbID === movie.imdbID)) { // Add only if the movie is not added earlier
      setSelectedMovies([...selectedMovies, movie]);
    }
  };
  const removeMovie = (imdbID) => {
    setSelectedMovies(selectedMovies.filter((item) => item.imdbID !== imdbID));
  };
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <main className="flex-col justify-center items-center">
        <GraphArea data={selectedMovies} />
        <div className="text-center">
          <button className="rounded-full p-2 m-1 hover:border-white hover:border" onClick={handleOpen}>
            + Add Movie
          </button>
        </div>
        <SelectedMovies data={selectedMovies} removeMovie={removeMovie} />
        <Modal
          isOpen={open}
          onClose={handleClose}
          hasCloseButton={true}
        >
          {open && <ModalContent addToSelectedMovies={addToSelectedMovies} />}
        </Modal>
      </main>
    </div>
  );
}

export default App;
