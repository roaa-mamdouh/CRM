import type { Granularity } from './comparators';
import type { HourCycle } from './types';
export declare function getOptsByGranularity(granularity: Granularity, hourCycle: HourCycle): Intl.DateTimeFormatOptions;
export declare function handleCalendarInitialFocus(calendar: HTMLElement): void;
