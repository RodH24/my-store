import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img => ', this.img);

    //code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/Images/default.png';
//  counter = 0;
//  counterFn: number | undefined;

  constructor() {
    //before render
    //async -- one time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //before - during render
    //changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes',changes);

  }

  ngOnInit(): void {
    //before render
    //async - fetch -- one time
    console.log('ngOnInit', 'imgValue =>', this.img);
    //this.counterFn = window.setInterval(() => {
    //  this.counter += 1;
    //  console.log('run counter');
    //}, 1000);
  }

  ngAfterViewInit() {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    //delete
    console.log('ngOnDestroy');
//    window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
