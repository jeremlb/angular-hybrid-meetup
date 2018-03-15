import './styles/layout.less';

import 'angular-ui-router';
import 'angular-sanitize';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
