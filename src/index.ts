import { registerPlugin } from '@capacitor/core';

import type { cameraPreviewPlugin } from './definitions';

const cameraPreview = registerPlugin<cameraPreviewPlugin>('cameraPreview', {
  web: () => import('./web').then(m => new m.cameraPreviewWeb()),
});

export * from './definitions';
export { cameraPreview };
