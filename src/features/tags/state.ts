import { atom } from 'jotai';

import type { TagData } from '@olegpolyakov/tasks-core';
import { listReducer, singleReducer, type Store } from '@olegpolyakov/frontend/store';

export const tagsAtom = atom<TagData[]>([]);
export const tagsReducer = listReducer<TagData>('tag');

export const tagAtom = atom<TagData | null>(null);
export const tagReducer = singleReducer<TagData>('tag');

export function initTagsState(store: Store) {
    store.set('tags', tagsAtom);
    store.set('tag', tagAtom);
}