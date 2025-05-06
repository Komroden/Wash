import { InfoCard } from '../InfoCard/InfoCard'

export function InfoCards({ cards }: { cards:ICard[] }) {
    const leftCards = cards.slice(0, 3)
    const rightCard = cards.slice(-1)

    return (
        <div className="cards">
            <div className="left_cards">
                {leftCards.map((item : ICard) => <InfoCard key={item.id} id={item.id} label={item.label} />)}

            </div>
            <div className="right_cards">
                {rightCard.map((item : ICard) => <InfoCard key={item.id} id={item.id} label={item.label} />)}
            </div>
        </div>
    )
}
