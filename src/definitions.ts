import { PluginListenerHandle } from "@capacitor/core";
import { DCEFrame } from "dynamsoft-camera-enhancer";

export interface cameraPreviewPlugin {
  initialize(): Promise<void>;
  getResolution(): Promise<{resolution: string}>;
  setResolution(options: {resolution: number}): Promise<void>;
  getAllCameras(): Promise<{cameras: string[]}>;
  getSelectedCamera(): Promise<{selectedCamera: string}>;
  selectCamera(options: {cameraID: string; }): Promise<void>;
  setScanRegion(options: {region:ScanRegion}): Promise<void>;
  setZoom(options: {factor: number}): Promise<void>;
  setFocus(options: {x: number, y: number}): Promise<void>;
  /**
  * Web Only
  */
  setDefaultUIElementURL(url:string): Promise<void>;
  startCamera(): Promise<void>;
  stopCamera(): Promise<void>;
  pauseCamera(): Promise<void>;
  resumeCamera(): Promise<void>;
  /**
  * take a snapshot as base64.
  */
  takeSnapshot(options:{quality?:number}): Promise<{base64:string}>;
  /**
  * take a snapshot as DCEFrame. Web Only
  */
  takeSnapshot2(): Promise<{frame:DCEFrame}>;
  // takePhoto(): Promise<{base64:string}>;
  toggleTorch(options: {on: boolean}): Promise<void>;
  requestCameraPermission(): Promise<void>;
  // isOpen():Promise<{isOpen:boolean}>;
  addListener(
    eventName: 'onPlayed',
    listenerFunc: any,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}

/**
 * measuredByPercentage: 0 in pixel, 1 in percent
 */
export interface ScanRegion{
  left: number;
  top: number;
  right: number;
  bottom: number;
  measuredByPercentage: number;
}

export enum EnumResolution {
  RESOLUTION_AUTO = 0,
  RESOLUTION_480P = 1,
  RESOLUTION_720P = 2,
  RESOLUTION_1080P = 3,
  RESOLUTION_2K = 4,
  RESOLUTION_4K = 5
}
