import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';
import { Silabo } from 'src/app/models/silabo';
import { SilaboService } from 'src/app/services/silabo.service';

@Component({
  selector: 'app-home-silabos',
  templateUrl: './home-silabos.component.html',
  styleUrls: ['./home-silabos.component.css'],
})
export class HomeSilabosComponent implements OnInit {
  faList = faList;
  faGrid = faTh;

  viewSilabosGrid: boolean;

  silabos: Silabo[];
  page = 1;
  pageSize = 2;

  navigationExtras: NavigationExtras = {
    state: {
      silabo: null,
      edit: false,
    },
  };

  constructor(private router: Router, private silaboService: SilaboService) {}

  ngOnInit(): void {
    this.viewSilabosGrid = true;
    this.listSilabos(1);
  }

  activeListView(): void {
    this.viewSilabosGrid = false;
  }

  activeGridView(): void {
    this.viewSilabosGrid = true;
  }

  listSilabos(id: number): void {
    this.silaboService.listById(id).subscribe(
      (response: Silabo[]) => (this.silabos = response),
      (err) => console.log(err)
    );
  }

  createSilabo(): void {
    this.router.navigate(['silabo'], this.navigationExtras);
  }
}
