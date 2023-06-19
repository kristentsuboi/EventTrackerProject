import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacation } from 'src/app/models/vacation';
import { VacationService } from 'src/app/services/vacation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  vacationList: Vacation[] = [];
  newVaca = new Vacation();
  selected: Vacation | null = null;
  editing: Vacation | null = null;
  vacaCount: number = 0;
  addToCollection: boolean = false;

  constructor(
    private vacaService: VacationService,
    // private route: ActivatedRoute,
    // private router: Router
    ){}

  setVacaCount(vacaList: Vacation[]){
    this.vacaCount = vacaList.length;
  }

  ngOnInit(): void {
    this.loadVacations();
  }
  displayVacation(vacation: Vacation){
    return (this.selected = vacation);
  }
  displayTable(){
    this.selected = null;
  }
  setEditVacation(){
    this.editing = Object.assign({}, this.selected);
  }
  loadVacations(){
    return this.vacaService.index().subscribe({
      next: (vacaList) => {
        this.vacationList = vacaList;
        this.setVacaCount(vacaList);
      },
      error: (error) => {
        console.error('HomeComponent.loadVacations(): ERROR');
        console.error(error);
      }
    })
  }
  addVaca(newVaca: Vacation) {
    // this.todoService.create(newTodo);
    this.vacaService.create(newVaca).subscribe({
      next: (createdTodo) => {
        this.newVaca = new Vacation();
        this.loadVacations();
      },
      error: (badError) => {
        console.error('VacationComponent.addVaca(): error creating vaca');
        console.error(badError);
      },
    });
  }
  updateVaca(vacation: Vacation) {
    this.vacaService.update(vacation).subscribe({
      next: (updatedVaca) => {
        this.selected = updatedVaca;
        this.editing = null;
        this.loadVacations();
      },
      error: (error) => {
        console.error('HomeComponent.updateVaca(): error on update');
        console.error(error);
      },
    });
    this.loadVacations();
    this.editing = null;
  }
  deleteVaca(vacaId: number) {
    this.vacaService.destroy(vacaId).subscribe({
      next: () => {
        this.loadVacations();
        this.selected = null;
      },
      error: (error) => {
        console.error('HomeComponent.deleteVaca(): error deleting');
        console.error(error);
      },
    });
  }

}
