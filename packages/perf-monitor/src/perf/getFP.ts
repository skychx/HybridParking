import { ReportHandler } from 'web-vitals/src/types';
import { observe } from 'web-vitals/dist/modules/lib/observe';

export const getFP = (onReport: ReportHandler) => {
  const handler = (entry: PerformanceEntry) => {
    if (entry.name === 'first-paint') {
      onReport({
        // @ts-ignore
        name: 'FP',
        value: entry.startTime,
      })
    }
  }

  observe('paint', handler)
}