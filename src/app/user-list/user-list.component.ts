import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { UserService } from '../service/user/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 userList: User[] = [];
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      data => {
        this.userList = data;
      },
      error => {
        Swal.fire({
          title: 'Erro!',
          text: 'Erro ao retornar lista',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    );
  }

  deleteUser(id: number){
    this.userService.deleteUsers(id).subscribe(
      data => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Sucesso ao remover contato',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/user_list']);
      }
      // ,
      // error => {
      //  console.log(error);
      // }
    );
  }

  goToCreate(){
    this.router.navigate(['/user']);
  }

  editUser(user: User){
    this.userService.getUserForList(user);
    this.router.navigate(['/user']);
  }
}
