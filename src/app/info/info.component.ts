import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

}
