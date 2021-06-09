import { Component, OnInit } from '@angular/core';
import { Contact } from '../model';
import { ContactService } from '../service/contact/contact.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
 contactList: Contact[] = [];
  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){
    this.contactService.getContacts().subscribe(
      data => {
        this.contactList = data;
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

  deleteContact(id: number){
    this.contactService.deleteContacts(id).subscribe(
      data => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Sucesso ao remover contato',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/contact_list']);
      }      
    );
  }

  goToCreate(){
    this.router.navigate(['/contact']);
  }

  editContact(contact: Contact){
    this.contactService.getContactForList(contact);
    this.router.navigate(['/contact']);
  }
}
