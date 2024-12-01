import { type Ref } from 'vue';
import type { ResizeHandler } from '../types';
export declare function useWindowSplitterResizeHandlerBehavior({ disabled, handleId, resizeHandler, panelGroupElement, }: {
    disabled: Ref<boolean>;
    handleId: string;
    resizeHandler: Ref<ResizeHandler | null>;
    panelGroupElement: Ref<ParentNode | null>;
}): void;
