export interface IParlament{
    id:number;
    title:string;
    description:string;
};

export interface IMPs    {
    id:number,
    name: string,
    lastname: string,
    firstname: string,
    phonenumber: string,
    key:string
};

export interface ICommittee    {
    id:number,
    name: string,
    member1: string,
    member2: string,
    cityphone: string,
    internalphone: string,
    internalphone2: string

};
export interface IFraction    {
    id:number,
    name: string,
    leader: string,
    member: string,
    cityphone:string,
    internalphone: string,
};