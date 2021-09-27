import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
  imageObject = [{
    image: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/49702coreldraw.jpg',
     thumbImage: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/49702coreldraw.jpg',
     title:'Corel Draw',
}, {
    image: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/39348tally.jpg',
    thumbImage: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/39348tally.jpg',
    title:'Tally ERP 9'
}, {
    image: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/755tally%20advance.jpg',
    thumbImage: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/755tally%20advance.jpg',
     title: ' Tally ERP 9 Advanced',
     
},{
    image: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/58636tally%20gst.jpg',
    thumbImage: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/58636tally%20gst.jpg',
    title:'Tally ERP 9(GST)',
}, {
    image: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/8104photoshop%20thumbnail%20.jpg',
    thumbImage: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/8104photoshop%20thumbnail%20.jpg',
    title:'Adobe Photoshop'
  }, {
  image: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/52287illustrator.jpg',
  thumbImage: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/52287illustrator.jpg',
  title:'Adobe in Design'
}, {
  image: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/59926ms%20powerpopint.jpg',
  thumbImage: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/59926ms%20powerpopint.jpg',
  title:'Microsoft Design'
}, {
  image: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/73749asp.net.jpg',
  thumbImage: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/73749asp.net.jpg',
  title:'ASP.Net'
},
 {
    image: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/10656indesign.jpg',
    thumbImage: 'http://weq-pride.s3.amazonaws.com/data/courseThumbnail/10656indesign.jpg',
    title:'Adobe in Design'
}];
  constructor() { }

  ngOnInit(): void {
  }

}
