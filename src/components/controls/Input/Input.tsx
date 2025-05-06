import {ChangeEvent} from "react";

export function Input({ id, placeholder, type = ControlType.primary, className, value, onChange } : IInput) {
    return (
        <input value={value} onChange={(e : ChangeEvent<HTMLInputElement>) => onChange(id, e.target.value)} className={`input ${className}`} placeholder={placeholder} type={type} />
    )
}
