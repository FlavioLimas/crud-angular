import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private snackBar: MatSnackBar, 
        private http: HttpClientModule) { }

    showMessage(msg: string): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top"
        });
    }

    
}
