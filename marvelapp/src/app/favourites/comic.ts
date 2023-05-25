export interface IData {
    total: number,
    results: IComic[],
}
export interface IComic {
    id: number,
    title: string,
    description: string,
    thumbnail: IThumbnailData,
    prices: IPrices[],
}

export interface IThumbnailData {
    path: string,
    extension: string
}

export interface IPrices {
    type: string,
    price: number
}