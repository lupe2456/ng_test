import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  name = 'Esmeralda Guadalupe Zambrano Rodriguez';
  title = 'Desarrolladora Web';
  email = 'zrodriguez.esmeralda@gmail.com';
  phone = '+52 1 469 134 5732';
  photoUrl = 'https://avatars.githubusercontent.com/u/109485401?v=4';
}
