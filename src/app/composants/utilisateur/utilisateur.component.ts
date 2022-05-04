import { Component, OnInit } from '@angular/core';
//import { mainModule } from 'process';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.sass']
})
export class UtilisateurComponent implements OnInit {
  nom : string;
  age : number;
  email: string; 
  hobby: hobby;

  constructor() { 
    this.nom = "Alex"
    this.age = 25
    this.email = 'myMail@mainModule.fr'
    this.hobby = {
      hobbyUn: 'Basket',
      hobbyDeux: 'Lire',
      hobbyTrois: 'Apprendre'
    };
  }

  ngOnInit(): void {
}

  onClick() {
    alert('aucune information supplémentaire pour le moment !');
  }
}
interface hobby {
  hobbyUn: string;
  hobbyDeux: string; 
  hobbyTrois: string; 
}