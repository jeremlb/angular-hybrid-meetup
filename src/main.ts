import './styles/layout.less';

import * as angular from 'angular';

import { UrlService } from '@uirouter/core';
import { NgModuleRef } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppNG1 from './app-ng1';
import { AppModule } from './app.module';

angular.element(document.body).ready(() => {
  angular.module(AppNG1)
    .config([ '$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept() ])
    .run(['$$angularInjector', ($$angularInjector: any) => {
      const url: UrlService = $$angularInjector.get(UrlService);
      
      url.listen();
      url.sync();
    }]);

  platformBrowserDynamic().bootstrapModule(AppModule)
    .then((platformRef: NgModuleRef<AppModule>) => {
      const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
      upgrade.bootstrap(document.body, [AppNG1], { strictDi: true });
    })
    .catch((err: Error) => console.log(err));
});
