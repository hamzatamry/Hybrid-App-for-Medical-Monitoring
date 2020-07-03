import { SharedModule } from '../../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilPageRoutingModule } from './profil-routing.module';

import { ProfilPage } from './profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilPageRoutingModule,
    SharedModule
  ],
  declarations: [ProfilPage]
})
export class ProfilPageModule {}
