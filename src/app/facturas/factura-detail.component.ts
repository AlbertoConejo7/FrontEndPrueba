import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFac } from './factura';
import { FacturaService } from "./factura.service";
import { Subscription } from "rxjs";
import { IDet } from './detalle';
import { FormControl } from "@angular/forms";



@Component({
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {
  pageTitle: string = 'Factura Detail';
  factura: IFac | undefined;
  sub!: Subscription;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,private facturaService: FacturaService) { }

  detalles: IDet[] = [];
  filteredDetalles: IDet[] = [];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.factura = {
      "NUMERO_FACTURA": id,
      "FECHA": "Leaf rake with 48-inch wooden handle.",
      "USUARIO": "Alberto",
      "TOTAL": 0
    }

    this.sub = this.facturaService.getDetalles().subscribe({
      next: detalles => {
        this.detalles = detalles.DETALLES;
        this.filteredDetalles = this.detalles;
       
      },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/facturas']);
  }
  title = "basic-form";

  email = new FormControl(""); 




}


