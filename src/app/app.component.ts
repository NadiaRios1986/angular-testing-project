import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule, ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'angular-testing-project';

  music: string[]=['luna','love','black is black', 'sombras']
  nuevo: string=""

  addItem() :void {
    this.music.push (this.nuevo);
    this.nuevo='';
  }

  
}


 

  

  
  

 
    
  


