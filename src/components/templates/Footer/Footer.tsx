import { map } from 'lodash'

import { LinkButton } from '../../controls/LinkButton/LinkButton'
import telegram from '/logos_telegram.png'
import whatsapp from '/logos_whatsapp.png'

interface ComponentProps {
    title:string,
    orgName:string,
    inn:string,
    links:ILink[],
    ogrnip:string
}

export function Footer({ title, links = [], orgName, inn, ogrnip } : ComponentProps) {
    const handlerOpen = () => {

    }

    return (
        <div className="footer">
            <div className="footer_top">
                <div className="footer_logo">
                    <span>{title}</span>
                </div>
                {map(links, el => <LinkButton key={el.id} label={el.label} className="footer_link" url={el.url} />)}
                <div className="footer_messengers">
                    <img alt="telegram" src={telegram} />
                    <img alt="whatsapp" src={whatsapp} />
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_org_info">
                    <div className="org_name">
                        {orgName}
                    </div>
                    <div className="org_name">
                        {`ИНН ${inn}/ ОГРНИП ${ogrnip}`}
                    </div>

                </div>
                <div className="footer_policy">
                    <div onClick={handlerOpen} className="privacy_policy_href">
                        Политика конфиденциальности
                    </div>
                    <div className="footer_copyright">
                        {`©, ${orgName}, 2024 Все права защищены`}
                    </div>
                </div>

            </div>
        </div>
    )
}
