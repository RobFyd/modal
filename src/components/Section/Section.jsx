import "./Section.css";

export function Section({ onModalOpenClick }) {
  return (
    <section>
      <h2>Nie czekaj!</h2>
      <h3>Otwórz modal!</h3>
      <button onClick={onModalOpenClick}>Otwórz</button>
    </section>
  );
}
