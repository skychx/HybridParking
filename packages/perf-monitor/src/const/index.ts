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

export const ID_PREFIX = 'perf-monitor-';

export const enum Perf {
    'TTFB' = 'TTFB',
    'FP' = 'FP',
    'FCP' = 'FCP',
    'LCP' = 'LCP',
    'CLS' = 'CLS',
    'DCL' = 'DCL',
    'L' = 'L',
}

export const enum Vital2Color {
    'GOOD' = '#0cce6b',
    'NeedsImprovement' = '#ffa600',
    'POOR' = '#ff4f42',
}

export const Matrix3dReg = /^matrix3d\((?:[-\d.]+,\s*){12}([-\d.]+),\s*([-\d.]+)(?:,\s*[-\d.]+){2}\)/;
