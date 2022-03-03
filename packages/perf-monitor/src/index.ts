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

import { Metric } from 'web-vitals/src/types';
import { createRoot } from './dom/root';

import { ID_PREFIX, Vital2Color, Perf } from "./const";
import { getTTFB, getFP, getFCP, getLCP, getCLS, getDCL, getL, getFID } from './perf';

const Maps = {
  [Perf.FP]: {
    c: getFP,
    v: [2000, 4000],
  },
  [Perf.FCP]: {
    c: getFCP,
    v: [2000, 4000],
  },
  [Perf.LCP]: {
    c: getLCP,
    v: [2500, 4000],
  },
  [Perf.TTFB]: {
    c: getTTFB,
    v: [],
  },
  [Perf.DCL]: {
    c: getDCL,
    v: [],
  },
  [Perf.L]: {
    c: getL,
    v: [],
  },
  [Perf.FID]: {
    c: getFID,
    v: [100, 200],
  },
  [Perf.CLS]: {
    c: getCLS,
    v: [0.1, 0.25],
  },
}

function getVitals(vital: Perf) {
  const getFunc = Maps[vital].c;

  getFunc((data: Metric) => {
    const item = document.getElementById(ID_PREFIX + vital)
    item!.lastChild!.textContent = `${data.value.toFixed(1)}`
    console.log(data)

    if (Maps[vital].v.length === 0) {
      return
    }

    let bgColor = '#fff';
    if (data.value <= Maps[vital].v[0]) {
      bgColor = Vital2Color.GOOD;
    } else if (data.value <= Maps[vital].v[1]) {
      bgColor = Vital2Color.NeedsImprovement;
    } else {
      bgColor = Vital2Color.POOR;
    }
    item!.style.background = bgColor;
  })
}

const keys = Object.keys(Maps) as Perf[];

createRoot(keys);
keys.forEach(item => getVitals(item))
