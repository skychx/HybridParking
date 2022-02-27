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
