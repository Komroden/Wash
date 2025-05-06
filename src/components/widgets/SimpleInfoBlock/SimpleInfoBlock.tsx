
import { LinkButton } from '../../controls/LinkButton/LinkButton'

export function SimpleInfoBlock({ className, title, subtitle, withButton = false } : ISimpleInfoBlock) {
    return (
        <article className={className}>
            <div className="info">
                <p className="title">{title}</p>
                <p className="subtitle">{subtitle}</p>
            </div>
            {withButton && <LinkButton label="ЗАКАЗАТЬ" url="some" type="secondary" />}
        </article>
    )
}

