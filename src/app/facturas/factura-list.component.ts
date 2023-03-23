import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IFac } from "./factura";
import { FacturaService } from "./factura.service";

@Component({
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Facturas';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';

 

  
  public _inputNumeroFac: string = '';
  public _inputDate: string = '';


  
  get inputNumeroFac(): string {
    return this._inputNumeroFac;
  }
  get inputDate(): string {
    return this._inputDate;
  }

   
  onSubmit() {
    return this._inputDate;
  }


  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredFacturas = this.performFilter(value);
  }

  filteredFacturas: IFac[] = [];
  facturas: IFac[] = [];

  constructor(private facturaService: FacturaService) { }

  performFilter(filterBy: string): IFac[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.facturas.filter((factura: IFac) =>
      factura.USUARIO.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.facturaService.getFacturas().subscribe({
      next: facturas => {
        this.facturas = facturas;
        this.filteredFacturas = this.facturas;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Facturas: ' + message;
  }
}
