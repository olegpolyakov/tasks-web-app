import type { TasksSettings } from '@olegpolyakov/tasks-core';
import createSettings from '@olegpolyakov/frontend/features/settings';

export const {
    settingsAtom,
    initSettingsState,
    useSettingsContext,
    SettingsProvider
} = createSettings<TasksSettings>();