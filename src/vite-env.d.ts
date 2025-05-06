/// <reference types="vite/client" />


enum ControlType {
    primary = "primary",
    text = "text"
}
 interface IBaseBlock {
    title: string,
    subtitle?:string,
    className?:string,
}
interface ILink {
    label: string,
    id:string,
    url: string,
    type?:ControlType,
    className?:string
}
interface IAdvantageCard extends IBaseBlock {
    id?: string,
    key?:string,
    number?: number,
    htmlText?: string,

}
interface ISimpleInfoBlock extends IBaseBlock {
    withButton?: boolean,
}
interface ICard {
    id:string,
    label: string,
}

interface IInput{
    id: string,
    placeholder: string,
    type? : ControlType,
    className? : string,
    value: string,
    onChange: (id:string, value: string) => void
}

interface IButton{
    label: string,
    className? : string,
    onClick: () => void
}

interface IReviewItem{
    userName: string,
    rating : number,
    id:string,
    key?:string,
    date: string,
    reviewText:string,
    img: string,
    className?:string
}

