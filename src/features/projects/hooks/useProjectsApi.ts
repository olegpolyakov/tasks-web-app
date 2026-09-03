import { useApiFactory } from '@olegpolyakov/frontend/services/api';

import { remoteApi } from '../api';

export default function useProjectsApi() {
    return useApiFactory(remoteApi);
}