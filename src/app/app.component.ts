import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-cdk-playground';
  listItems: any[] | undefined;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    debugger;
    this.appService.getProducts().subscribe({
      next: (res) => {
        this.listItems = res;
      },
      error: (e) => console.log('Error:', e.message),
      complete: () => console.log('Success'),
    });
  }
}
