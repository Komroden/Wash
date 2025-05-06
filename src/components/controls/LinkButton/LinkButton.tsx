
interface ComponentProps {
    label: string,
    url: string,
    type?:string,
    className?:string
}
export function LinkButton({ label, url, type = 'primary', className } : ComponentProps) {
    return (
        <a href={url} className={`button ${type} ${className}`}>
            {label}
        </a>
    )
}
