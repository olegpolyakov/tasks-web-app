import type { TagData } from '@olegpolyakov/tasks-core';
import type { HttpClient } from '@olegpolyakov/frontend/clients/http';
import type { WsClient } from '@olegpolyakov/frontend/clients/ws';

import { API_URL } from '@/env';

import type { TagsApi } from './interface';

export default (http: HttpClient, ws: WsClient): TagsApi => ({
    events: ws,
    
    async fetchTags() {
        return http.get<TagData[]>(`${API_URL}/tags`);
    },

    async fetchTag(id: string): Promise<TagData> {
        return http.get<TagData>(`${API_URL}/tags/${id}`);
    },

    async createTag(data: Partial<TagData>) {
        return http.post<TagData>(`${API_URL}/tags`, data);
    },

    async updateTag(id: string, data: Partial<TagData>) {
        return http.put<TagData>(`${API_URL}/tags/${id}`, data);
    },

    async deleteTag(id: string) {
        return http.delete(`${API_URL}/tags/${id}`);
    }
});