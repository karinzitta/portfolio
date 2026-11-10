import type { FocusCard } from "@/types/portfolio";

export function FocusCards({ cards }: { cards: FocusCard[] }) {
  return (
    <div className="cards">
      {cards.map((card) => (
        <div className="card" key={card.num}>
          <div className="num mono">{card.num}</div>
          <h3>{card.title}</h3>
          <div className="chips">
            {card.chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FocusCards;
