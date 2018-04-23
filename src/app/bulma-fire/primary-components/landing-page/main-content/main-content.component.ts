import { Component, OnInit } from '@angular/core';
import { carouselImage, CarouselImage } from '../../../models/carousel/carousel-image.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {

  // region class variables 

    public interval: any;
    public carouselImages:Array<carouselImage>;
    public currentImage: string;
    public currentIndex: number = 0;

  // endregion class variables 

  constructor() { }

  // region public functions

    public ngOnInit(): void {
      this.carousel();
      this.setImages();
      this.currentImage=this.carouselImages[0].imageUrl;
    }

    //sets images for carousel
    public setImages():void {
      this.carouselImages = new Array<CarouselImage>();
      this.carouselImages.push({
        imageUrl:'/assets/images/Abstract-Hi-tech-Desktop-Wallpapers.jpg',
        title:"tech wallpaper 1",
        showImage:true
      },
      {
        imageUrl:'/assets/images/114548.jpg',
        title:"tech wallpaper 2",
        showImage:true
      },
      {
        imageUrl:'/assets/images/iwp779791516-cool-high-tech-wallpapers.jpg',
        title:"tech wallpaper 3",
        showImage:true
      }
    )
    }

    //increments through each image within carousel
    public carousel():void {
      this.setImages()

        // this.interval = setInterval(this.changeImage(this.carouselImages), 80000);

    }

    public changeImage(images:Array<carouselImage>):void {
      if(images.length > 0) {
        images.forEach((entry) => {
          alert("current image:" + entry.imageUrl);
          this.currentImage=entry.imageUrl;
        });
      }
    }

    //increment forward through the image set
    public forward():void {
      if(this.currentIndex<(this.carouselImages.length-1) && this.currentIndex!=(this.carouselImages.length-1)) {
        this.currentIndex=this.currentIndex+1;
        this.currentImage=this.carouselImages[this.currentIndex].imageUrl;
        }
        else if(this.currentIndex==(this.carouselImages.length-1)){
          this.currentIndex=0;
          this.currentImage=this.carouselImages[this.currentIndex].imageUrl;
        }
    }

    //decrement forward through the image set
    public backward():void {
      if(this.currentIndex>0 && this.currentIndex!=0) {
      this.currentIndex=this.currentIndex-1;
      this.currentImage=this.carouselImages[this.currentIndex].imageUrl;
      }
      else if(this.currentIndex==0){
        this.currentIndex=2;
        this.currentImage=this.carouselImages[this.currentIndex].imageUrl;
      }
    }

  // endregion public functions

}
