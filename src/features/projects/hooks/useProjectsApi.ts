import { useApi } from '@olegpolyakov/frontend/hooks/api';

import { remoteApi } from '../api';

export default function useProjectsApi() {
    return useApi(remoteApi);
}