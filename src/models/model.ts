export interface IParlament{
    id:number;
    title:string;
    description:string;
    img:string
}
export interface IDocCirculation{
    id:number,
    text:string,
    text_A?:string,
    text_B?:string,

}
export interface ICommittees{
    id:number,
    title:string,
    text:string
}