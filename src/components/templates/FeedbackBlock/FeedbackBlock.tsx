import { useState } from 'react'

import feedbackLogo from '/public/feedback_logo.png'
import { Input } from '../../controls/Input/Input'
import { Button } from '../../controls/Button/Button'
import {PrivacyPolicy} from "../../widgets/PrivacyPolicy/PrivacyPolicy.tsx";

enum ControlType {
    primary = "primary",
    text = "text"
}

export function FeedbackBlock({ title, subtitle } : IBaseBlock) {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
    })
    const handleChange = (key : string, value : string) => {
        setFormData(prev => ({
            ...prev,
            [key]: value,
        }))
    }
    const handleSubmit = () => {
        console.log(formData)
    }

    return (
        <article className="feedback_block">
            <div className="title_block">
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
            </div>
            <form className="feedback_form">
                <Input id="name" value={formData.name} onChange={handleChange} className="feedback_input" placeholder="Ваше имя" type={ControlType.text} />
                <Input id="number" value={formData.number} onChange={handleChange} className="feedback_input" placeholder="Ваш телефон" type={ControlType.text} />
                <Button onClick={handleSubmit} className="feedback_button" label="ОТПРАВИТЬ ЗАЯВКУ" />
                <PrivacyPolicy className="feedback_policy" />
            </form>
            <img alt="logo" src={feedbackLogo} className="feedback_logo" />
        </article>
    )
}
