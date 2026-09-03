import type { TasksSettings } from '@olegpolyakov/tasks-core';
import http from '@olegpolyakov/frontend/clients/http';
import settings from '@olegpolyakov/frontend/features/settings';

import ws from '@/shared/ws';

export const {
    settingsAtom,
    initSettingsState,
    useSettingsContext,
    SettingsProvider
} = settings<TasksSettings>(http, ws);