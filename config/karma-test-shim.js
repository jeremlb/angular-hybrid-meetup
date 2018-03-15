'use strict';

import '../src/vendor';
import '../src/app';

import 'angular-mocks';

// Import all spec tests
const specFiles = require.context('../src/app', true, /.+\.spec\.js$/);
specFiles.keys().forEach(specFiles);
