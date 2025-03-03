import { useState } from "react";
import "./App.css";
import { Main } from "./components/Main/Main";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <h1>Witaj w lekcji o React Portal!</h1>
      <Main onModalOpenClick={() => setIsModalOpen(true)} />
      <footer>zrozumiecReact.pl ©</footer>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default App;
