/*
 * Copyright 2022 skychx
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ReportHandler } from 'web-vitals/src/types';
import { observe } from 'web-vitals/dist/modules/lib/observe';
import { afterLoad } from './common';

export const getDCL = (onReport: ReportHandler) => {
  afterLoad(() => {
    observe('navigation', (entry: PerformanceEntry) => {
      // @ts-ignore
      if (entry.domContentLoadedEventEnd) {
        onReport({
          // @ts-ignore
          name: 'DCL',
          // @ts-ignore
          value: entry.domContentLoadedEventEnd,
        })
      }
    })
  })
}