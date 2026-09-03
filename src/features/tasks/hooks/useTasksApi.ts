import { useAuthContext } from '@olegpolyakov/frontend/features/auth';
import { useApiFactory } from '@olegpolyakov/frontend/services/api';

import { localApi, remoteApi } from '../api';

export default function useTasksApi() {
    const { isAuthenticated } = useAuthContext();
    
    return useApiFactory(isAuthenticated ? remoteApi : localApi);
}