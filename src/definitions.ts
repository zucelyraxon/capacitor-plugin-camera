export interface cameraPreviewPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
