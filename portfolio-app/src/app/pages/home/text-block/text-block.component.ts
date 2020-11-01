import {Component, OnInit} from '@angular/core';
import {ContentService} from "../../../shared/content.service";

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements OnInit {

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
  }

}
