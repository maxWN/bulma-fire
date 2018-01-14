
export interface carouselImage {
    imageUrl:string,
    showImage:boolean,
    title?:string
}

export class CarouselImage implements carouselImage {
    imageUrl: string;
    showImage: boolean;
    title?:string;
}