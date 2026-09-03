import { useAuthContext } from '@olegpolyakov/frontend/features/auth';
import { useApi } from '@olegpolyakov/frontend/hooks/api';

import { localApi, remoteApi } from '../api';

export default function useTasksApi() {
    const { isAuthenticated } = useAuthContext();
    
    return useApi(isAuthenticated ? remoteApi : localApi);
}