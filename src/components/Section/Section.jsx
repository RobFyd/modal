import { useState } from "react";
import { createPortal } from "react-dom";
import "./Section.css";
import { Modal } from "../Modal/Modal";

export function Section() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modal = createPortal(
    <Modal onClose={() => setIsModalOpen(false)} />,
    document.body
  );

  return (
    <section>
      <h2>Nie czekaj!</h2>
      <h3>Otwórz modal!</h3>
      <button onClick={() => setIsModalOpen(true)}>Otwórz</button>
      {isModalOpen && modal}
    </section>
  );
}
