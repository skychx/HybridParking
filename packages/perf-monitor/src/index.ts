import { Metric } from 'web-vitals/src/types';
import { createRoot } from './dom/root';

import { ID_PREFIX, Perf, Vital2Color } from "./const";
import { getTTFB, getFP, getFCP, getLCP, getCLS, getDCL, getL } from './perf';

/**
 * TTFB
 * // an arbitrary number can't be placed on what consists of a "good" TTFB score
 * @see https://web.dev/ttfb/#what-is-a-good-ttfb-score
 *
 * FP、FCP、LCP、CLS
 * @see https://web.dev/vitals/
 *
 * DCL
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
 *
 * L(OnLoad)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 */
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
  [Perf.CLS]: {
    c: getCLS,
    v: [0.1, 0.25],
  },
}

function getVitals(vital: string) {
  const getFunc = Maps[vital].c;

  getFunc((data: Metric) => {
    const item = document.getElementById(ID_PREFIX + vital)
    item.lastChild.textContent = `${data.value.toFixed(1)}`
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
    item.style.background = bgColor;
  })
}

const keys = Object.keys(Maps);

createRoot(keys);
keys.forEach(item => getVitals(item))
