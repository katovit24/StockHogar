import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonItem, IonInput, IonList, IonLabel, IonButton, IonModal, IonIcon, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonGrid, IonCol, IonRow, IonCardContent } from '@ionic/angular/standalone';
import { GestionStockService } from 'src/app/services/gestion-stock.service';
import { addIcons } from 'ionicons';
import { logoIonic,addCircleOutline, personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.page.html',
  styleUrls: ['./ubicaciones.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonRow, IonCol, IonGrid, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCard, IonIcon, IonModal, IonButton, IonLabel, IonList, IonInput, IonItem, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class UbicacionesPage implements OnInit {

  public nombreUbicacion : string= "";

  constructor(public servicio : GestionStockService) { 
    addIcons({addCircleOutline,personCircle,logoIonic});
  }

  public addUbicacion(nombreUbicacion:string){
    this.servicio.createUbicacion(nombreUbicacion)
  }
  ngOnInit() {
  }

}
