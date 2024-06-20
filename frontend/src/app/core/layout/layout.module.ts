import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { IconsProviderModule } from "src/app/icons-provider.module";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { HeaderComponent } from "./header/header.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzGridModule } from "ng-zorro-antd/grid";

const NzModules = [
  NzLayoutModule,
  NzAvatarModule,
  NzDropDownModule,
  NzButtonModule,
  NzIconModule,
  NzGridModule,
]

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconsProviderModule,
    NzModules
  ],
  exports: [ HeaderComponent ],
})
export class LayoutModule {}
