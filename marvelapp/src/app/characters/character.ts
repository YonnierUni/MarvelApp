export interface ICharacter {
    id: number,
    name: string,
    description: string,
    thumbnail: IThumbnailData
    comics: IComicsData
}

export interface IThumbnailData {
    path: string,
    extension: string
}

export interface IComicsData {
    available: number,
    items: IItemsData[],
    returned: number

}

export interface IItemsData {
    resourceURI: string,
    name: string
}