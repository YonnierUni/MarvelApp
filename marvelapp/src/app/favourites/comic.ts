export interface IComic {
    id: number,
    title: string,
    description: string,
    thumbnail: IThumbnailData,
}

export interface IThumbnailData {
    path: string,
    extension: string
}