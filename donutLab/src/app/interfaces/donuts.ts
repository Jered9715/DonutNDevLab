export interface donuts{
    count:number;
    results: Results[];
}

export interface Results{
    id:number;
    ref:string;
    name: string;
    photo:string;
    photo_attribution: string;
}