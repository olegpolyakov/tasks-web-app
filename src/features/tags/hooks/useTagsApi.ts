import { useAuthContext } from '@olegpolyakov/frontend/features/auth';
import { useApiFactory } from '@olegpolyakov/frontend/services/api';

import { localApi, remoteApi } from '../api';

export default function useTagsApi() {
    const { isGuest } = useAuthContext();

    return useApiFactory(isGuest ? localApi : remoteApi);
}