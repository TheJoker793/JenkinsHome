import { Component, OnInit } from '@angular/core';
import { Provider } from '../models';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrl: './list-providers.component.css'
})
export class ListProvidersComponent implements OnInit {

  providers: Provider[] = [];

  constructor(private providerService: ProviderService, private router:Router) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.providerService.getProviders().subscribe(
      (data: Provider[]) => {
        this.providers = data;
      },
      error => console.log(error)
    );
  }
  goAdd(){
     this.router.navigate(["addProvider"]);
  }
  deleteProvider(provider:Provider)
  {
    this.providerService.deleteProvider(provider).subscribe(
      data=>{
       // console.log(data);
        this.refresh();
      }
    );
  }
  updateProvider(provider:any)
  {
    //alert(provider.id);
    this.router.navigate(["updateProvider",provider.id]);
  }
}
