import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {ChatBoksbalComponent} from "./chat-boksbal.component";

@NgModule({
  declarations: [RemoteEntryComponent, ChatBoksbalComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
