import { OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from './../../photo/photo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = []; //InBound property
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void { //Este método verifica se ocorreu mudanças em alguma InBound property e é acionado
    if (changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }

}
