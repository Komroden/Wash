
export function AdvantageCard({ number, title, htmlText, className = '' } : IAdvantageCard) {
    return (
        <article className={`advantage_card ${className}`}>
            <span className="advantage_card_number">{number}</span>
            <p className="advantage_card_info">
                {title}
            </p>
            {htmlText && (
                <p className="advantage_card_text" dangerouslySetInnerHTML={{ __html: htmlText }} />
            )}
        </article>
    )
}
