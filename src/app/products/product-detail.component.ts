import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { FormControl } from "@angular/forms";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.product = {
      "CODIGO_ARTICULO": id,
      "DESCRIPCION": "Leaf rake with 48-inch wooden handle.",
      "PRECIO": 19.95
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
  title = "basic-form";

  email = new FormControl("");

}
