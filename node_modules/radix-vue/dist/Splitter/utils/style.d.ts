import type { PanelData } from "../SplitterPanel";
import type { DragState } from './types';
import type { CSSProperties } from 'vue';
type CursorState = 'horizontal' | 'intersection' | 'vertical';
export declare function getCursorStyle(state: CursorState, constraintFlags: number): string;
export declare function resetGlobalCursorStyle(): void;
export declare function setGlobalCursorStyle(state: CursorState, constraintFlags: number): void;
export declare function computePanelFlexBoxStyle({ defaultSize, dragState, layout, panelData, panelIndex, precision, }: {
    defaultSize: number | undefined;
    layout: number[];
    dragState: DragState | null;
    panelData: PanelData[];
    panelIndex: number;
    precision?: number;
}): CSSProperties;
export {};
