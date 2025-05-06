import { map } from 'lodash'

import { LinkButton } from '../../controls/LinkButton/LinkButton'


interface IHeader  {
    links: ILink[],
    phone: string,
    title: string
}

export function Header({ links = [], phone, title } : IHeader) {
    return (
        <nav className="header">
            <div className="header_logo">
                <span>{title}</span>
            </div>
            <div className="header_links">
                {map(links, (el : ILink) => <LinkButton key={el.id} label={el.label} url={el.url} />)}

            </div>
            <div className="header_phone">
                {phone}
            </div>

        </nav>
    )
}
