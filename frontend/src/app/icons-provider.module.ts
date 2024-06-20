import { NgModule } from '@angular/core';
import { IconModule, IconService } from '@ant-design/icons-angular';

@NgModule({
  imports: [IconModule],
  exports: [IconModule],
})
export class IconsProviderModule {
  constructor(private iconService: IconService) {
    this.iconService.useJsonpLoading();
  }
}
