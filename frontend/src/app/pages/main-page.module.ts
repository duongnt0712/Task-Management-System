import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IconsProviderModule } from "../icons-provider.module";
import { NZ_I18N, en_US } from "ng-zorro-antd/i18n";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzGridModule } from "ng-zorro-antd/grid";
import { MainPageRoutingModule } from "./main-page-routing.module";
import { LayoutModule } from "../core/layout/layout.module";
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';

const NzModules = [
  NzLayoutModule,
  NzMenuModule,
  NzButtonModule,
  NzIconModule,
  NzTypographyModule,
  NzDrawerModule,
  NzGridModule,
  NzDividerModule,
  NzInputModule
];

@NgModule({
  declarations: [ MainPageComponent ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    // HttpClientModule,
    NzModules,
    LayoutModule,
  ],
  providers: [
  ]
})
export class MainPageModule {}
