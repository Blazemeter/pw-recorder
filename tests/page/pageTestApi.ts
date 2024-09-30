/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Page, ViewportSize } from 'pw-recorder-core';
import type { PageScreenshotOptions, ScreenshotMode, VideoMode } from '@pw-recorder/test';
export { expect } from '@pw-recorder/test';

// Page test does not guarantee an isolated context, just a new page (because Android).
export type PageTestFixtures = {
  page: Page;
};

export type PageWorkerFixtures = {
  headless: boolean;
  channel: string;
  screenshot: ScreenshotMode | { mode: ScreenshotMode } & Pick<PageScreenshotOptions, 'fullPage' | 'omitBackground'>;
  trace: 'off' | 'on' | 'retain-on-failure' | 'on-first-retry' | 'retain-on-first-failure' | 'on-all-retries' | /** deprecated */ 'retry-with-trace';
  video: VideoMode | { mode: VideoMode, size: ViewportSize };
  browserName: 'chromium' | 'firefox' | 'webkit' | '_bidiFirefox' | '_bidiChromium';
  browserVersion: string;
  browserMajorVersion: number;
  electronMajorVersion: number;
  isAndroid: boolean;
  isElectron: boolean;
  isWebView2: boolean;
};
