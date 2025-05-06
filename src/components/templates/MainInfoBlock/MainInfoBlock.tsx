import { map } from 'lodash'

import advantagesLogo from '/advantages_logo.png'
import { AdvantageCard } from "../../widgets/AdvantageCard/AdvantageCard.tsx";
import { SimpleInfoBlock } from "../../widgets/SimpleInfoBlock/SimpleInfoBlock.tsx";

const advantagesCards : IAdvantageCard[] = [
    {
        "id": "1",
        "title": "Бесплатная диагностика, даже, если вы откажитесь от ремонта"
    },
    {
        "id": "2",
        "title": "Бесплатный выезд курьера за вашим устройством"
    },
    {
        "id": "3",
        "title": "Ремонт от 15 мин, запчасти всегда наличие"
    },
    {
        "id": "4",
        "title": "Защитное стекло в подарок при любом ремонте"
    }
]


export function MainInfoBlock({ title, subtitle } : IBaseBlock) {
    return (
        <article className="main_info_block">
            <div className="title_block">
                <h1 className="title">{title}</h1>
                {subtitle && <h2 className="subtitle">{subtitle}</h2>}
            </div>
            <div className="advantages">
                <div className="advantages_cards">
                    {map(
                        advantagesCards,
                        (el, index) => <AdvantageCard key={el.id} title={el.title} number={index + 1} />,
                    ) }
                </div>
                <img className="advantages_logo" alt="advantages_logo" src={advantagesLogo} />
            </div>
            <SimpleInfoBlock
                withButton
                title="Почему мы"
                className="why_we"
                subtitle="Выполним качественно самый сложный ремонт, даже если другие сервисы вам отказали"
            />
        </article>
    )
}
