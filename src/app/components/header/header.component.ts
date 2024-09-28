import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Data Table',
            icon: 'pi pi-database'
        },
       
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ]
}
}
