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
import { NavigationTimingPolyfillEntry } from 'web-vitals/src/types';

export function afterLoad(callback: () => void) {
  if (document.readyState === 'complete') {
    // Queue a task so the callback runs after `loadEventEnd`.
    setTimeout(callback, 0);
  } else {
    // Queue a task so the callback runs after `loadEventEnd`.
    addEventListener('load', () => setTimeout(callback, 0));
  }
}

export function getNavigationEntryFromPerformanceTiming (): NavigationTimingPolyfillEntry {
  // Really annoying that TypeScript errors when using `PerformanceTiming`.
  const timing = performance.timing;

  const navigationEntry: {[key: string]: number | string} = {
    entryType: 'navigation',
    startTime: 0,
  };

  for (const key in timing) {
    if (key !== 'navigationStart' && key !== 'toJSON') {
      navigationEntry[key] = Math.max(
          (timing[key as keyof PerformanceTiming] as number) -
          timing.navigationStart, 0);
    }
  }
  return navigationEntry as unknown as NavigationTimingPolyfillEntry;
};

export function getNavigationEntry(indicator: keyof PerformanceNavigationTiming) {
  const navigationEntry = (performance.getEntriesByType('navigation')[0] ||
    getNavigationEntryFromPerformanceTiming()) as PerformanceNavigationTiming;
    const value = navigationEntry[indicator] as number;

  if (value < 0 || value > performance.now()) {
    return;
  }

  return value;
}
