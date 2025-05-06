import firstImg from '/service_card_first.png'
import secondImg from '/service_card_second.png'
import thirdImg from '/service_card_third.png'
import forthImg from '/service_card_forth.png'

export function InfoCard({ id, label } : ICard) {
    let img

    switch (id) {
        case '1':
            img = firstImg

            break
        case '2':
            img = secondImg

            break
        case '3':
            img = thirdImg

            break
        case '4':
            img = forthImg

            break
        default:
            img = firstImg
    }

    return (
        <div className="card">
            <div className="card_title_wrapper">
                <p className="card_title">{label}</p>
                <svg width="26" className="arrow" height="8" viewBox="0 0 26 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5H25V3.5H0V4.5Z" />
                </svg>
            </div>

            <img alt="img" className="img" src={img} />
        </div>
    )
}
