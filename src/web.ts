import { WebPlugin } from '@capacitor/core';

import type { cameraPreviewPlugin } from './definitions';

export class cameraPreviewWeb extends WebPlugin implements cameraPreviewPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
