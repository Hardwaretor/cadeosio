import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})

export class HeaderComponent implements OnInit {

  photo: string | ArrayBuffer;
  user: User;

  constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
  }

  ngOnInit(): void {
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.photo = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
}

}
