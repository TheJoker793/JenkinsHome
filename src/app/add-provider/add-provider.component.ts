import { Component } from '@angular/core';
import { Provider } from '../models';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css'
})
export class AddProviderComponent {
  constructor(private providerService: ProviderService, private router: Router) { }

  addProvider(providerForm: any) {
    //console.log(providerForm)
    let provider = {
      name: providerForm.name,
      address: providerForm.address,
      email: providerForm.email,
      //dateCreateRDV: new Date()
    };
    this.providerService.addProvider(provider).subscribe(
      //this.providerService.addProvider(providerForm).subscribe(
      data => {
        //console.log(data);
        this.router.navigate(["listeProviders"]);

      },
      error => console.log(error)
    );


  }
}
