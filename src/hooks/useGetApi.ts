import { useCallback } from 'react';
import { Api } from 'src/types/api';
import { ApiResponseError, fetchApi, StrictPropertyCheck } from 'src/utils/api';
import useSWR, { SWRResponse } from 'swr';

export const useGetApi = <
  Url extends keyof Api['GET'],
  Request extends Api['GET'][Url][0],
  Response extends Api['GET'][Url][1],
>(
  url: Url,
  ...args: Request extends undefined
    ? []
    : [StrictPropertyCheck<Request, Api['GET'][Url][0]>]
): SWRResponse<Response, ApiResponseError> => {
  const fetcher = useCallback(
    () => fetchApi<Response>(url, 'GET', args.at(0)),
    [args, url],
  );

  return useSWR(`${url}${JSON.stringify(args.at(0))}`, fetcher);
};
