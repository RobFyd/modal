import { useState } from "react";
import "./Section.css";
import { Modal } from "../Modal/Modal";

export function Section() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <h2>Nie czekaj!</h2>
      <h3>Otwórz modal!</h3>
      <button onClick={() => setIsModalOpen(true)}>Otwórz</button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}
