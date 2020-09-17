import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@app/models/sort';
import { Subscription } from 'rxjs';
import { User } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() pageLimit: number;
  @Input() selectedSortObject: Sort;
  public users: User[];
  public pageOffset = 0;
  public pageTotal: number;
  subscription: Subscription;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.subscription = this.userService.getMultiple()
      .subscribe(
        (response) => {
          this.users = response.data;
        });
  }

  ngOnChanges() {
    this.getUsers();
  }

  deleteUser(id: number) {
    console.log('delete:', id);
    this.userService.delete(id).subscribe((response) => {
      if (response.ok) {
        this.getUsers();
      }
    });
  }

  prevPage() {
    if (this.pageOffset) { this.pageOffset--; }
    this.getUsers();
  }

  nextPage() {
    if (this.pageOffset < this.pageTotal) { this.pageOffset++; }
    this.getUsers();
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
