/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export enum BcrSide {
 NONE,
 FAR,
 NEAR,
}

export interface BcrHelper {
  getSide(): Promise<BcrSide>;

  // `message`: must be JSON-serializable
  sendMessageToOtherSide(message: ArrayBuffer): Promise<boolean>;

  addOnMessageListener(listener: (message: ArrayBuffer) => void): void;
  removeOnMessageListener(listener: (message: ArrayBuffer) => void): void;

  // Toggles visibility of the overlay on the near side to provide
  // access to far side content.
  showOverlay(): Promise<void>;
  hideOverlay(): Promise<void>;
}
