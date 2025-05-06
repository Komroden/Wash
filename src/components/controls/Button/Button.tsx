

export function Button({ label, className, onClick } : IButton) {
    return (
        <button onClick={onClick} aria-label="submit" className={`button ${className}`} type="submit">
            {label}
        </button>
    )
}
