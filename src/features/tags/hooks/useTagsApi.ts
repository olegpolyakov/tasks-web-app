import { useApi } from '@olegpolyakov/frontend/hooks/api';

import { remoteApi } from '../api';

export default function useTagsApi() {
    return useApi(remoteApi);
}