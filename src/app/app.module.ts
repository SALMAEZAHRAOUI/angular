import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // Importer CommonModule ici
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Pour le routage
import { FormsModule } from '@angular/forms';  // Assurez-vous d'importer FormsModule ici
import { AppRoutingModule } from './app-routing.module'; // Assurez-vous d'importer votre module de routage

// Importation de vos composants
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SecretComponent } from './secret/secret.component';
import { ModalComponent } from './modal/modal.component';  // Ajoutez SecretComponent si nécessaire

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    // Ajoutez LoginComponent ici
   // Ajoutez RegisterComponent ici
    SecretComponent, ModalComponent,   // Assurez-vous d'ajouter SecretComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,      // Ajoutez CommonModule ici pour activer ngIf et ngFor
    AppRoutingModule,  // Si vous avez un module de routage
    RouterModule,      // Active le routage dans votre application
    FormsModule,       // Ajoutez FormsModule pour activer ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
