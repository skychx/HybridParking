import { ReportHandler } from 'web-vitals/src/types';
import { observe } from 'web-vitals/dist/modules/lib/observe';
import { afterLoad } from './common';

export const getL = (onReport: ReportHandler) => {
  afterLoad(() => {
    observe('navigation', (entry: PerformanceEntry) => {
      // @ts-ignore
      if (entry.domContentLoadedEventEnd) {
        onReport({
          // @ts-ignore
          name: 'L',
          // @ts-ignore
          value: entry.loadEventEnd,
        })
      }
    })
  })
}