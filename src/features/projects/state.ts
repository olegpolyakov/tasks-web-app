import { atom } from 'jotai';

import type { ProjectData } from '@olegpolyakov/tasks-core';
import { listReducer, singleReducer, type Store } from '@olegpolyakov/frontend/store';

export const projectsAtom = atom<ProjectData[]>([]);
export const projectsReducer = listReducer<ProjectData>('project');

export const projectAtom = atom<ProjectData | null>(null);
export const projectReducer = singleReducer<ProjectData>('project');

export function initProjectsState(store: Store) {
    store.set('projects', projectsAtom);
    store.set('project', projectAtom);
}