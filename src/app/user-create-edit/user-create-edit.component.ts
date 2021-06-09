import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';
import Swal from 'sweetalert2';
import { User } from '../model';

@Component({
  selector: 'app-user-create-edit',
  templateUrl: './user-create-edit.component.html',
  styleUrls: ['./user-create-edit.component.scss']
})
export class UserCreateEditComponent implements OnInit {
  user: User = null;
  userForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, public userService: userService) { }

  ngOnInit(): void {
    this.userService.botaoEdit.subscribe( edit => {
      this.user = edit;
      this.userForm.get('id').setValue(edit.id);
      this.userForm.get('name').setValue(edit.name);
      this.userForm.get('username').setValue(edit.username);
      this.userForm.get('senha').setValue(edit.senha);
      this.userForm.get('status').setValue(edit.status);
    });
  }

  createUser(){
    if (this.userForm.valid){
      this.user = this.userForm.value;
      this.userService.createUser(this.user).subscribe(
        data => {
          Swal.fire({
            title: 'Sucesso!',
            text: 'Usuario criado com sucesso',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.router.navigate(['/user_list']);
        },
        error => {
          Swal.fire({
            title: 'Erro!',
            text: 'Erro ao criar Usuario',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      );
    }else{
      Swal.fire({
        title: 'Erro!',
        text: 'Preencha todos os campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }


  updateUser(){
    if (this.userForm.valid){
      this.user = this.userForm.value;
      this.userService.updateuser(this.user).subscribe(
        data => {
          Swal.fire({
            title: 'Sucesso!',
            text: 'Usuario editado com sucesso',
            icon: 'success',
            confirmButtonText: 'Okay'
          });
          this.router.navigate(['/user_list']);
        },
        error => {
          Swal.fire({
            title: 'Erro!',
            text: 'Erro ao editar Usuario',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      );
    }else{
      Swal.fire({
        title: 'Erro!',
        text: 'Preencha todos os campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }


}
