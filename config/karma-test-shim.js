'use strict';

import '../src/vendor.ts';
import '../src/app-ng1';

import 'angular-mocks';

// Import all spec tests
const specFiles = require.context('../src/app', true, /.+\.spec\.js$/);
specFiles.keys().forEach(specFiles);
