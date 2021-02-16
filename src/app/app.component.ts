import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: Array<{ code: string; description: string }> | undefined;

  ngOnInit(): void {
    this.data = new Array<{ code: string; description: string }>();
    for (let i = 0; i < 10; i++) {
      this.data.push({ code: `Code ${i}`, description: `Description ${i}` });
    }
  }
}
