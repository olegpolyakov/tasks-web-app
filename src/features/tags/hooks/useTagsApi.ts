import { useApiFactory } from '@olegpolyakov/frontend/services/api';

import { remoteApi } from '../api';

export default function useTagsApi() {
    return useApiFactory(remoteApi);
}