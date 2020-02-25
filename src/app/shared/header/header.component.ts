import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleEvent:EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.toggleEvent.emit(null)
  }
}
