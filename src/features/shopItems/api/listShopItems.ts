import { useQuery } from 'react-query';

import { ShopItem } from '@/types';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

type getShopItemsParam = {
  categoryID: string;
  campaignID: string;
};

export const getShopItems = (
  params: getShopItemsParam,
): Promise<ShopItem[]> => {
  const { categoryID, campaignID } = params;
  return axios.get('/shop_items', {
    params: {
      // ここにクエリパラメータを指定する
      category_id: categoryID,
      campaign_id: campaignID,
    },
  });
};

type QueryFnType = typeof getShopItems;

type UseShopItemsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useShopItems = ({ config }: UseShopItemsOptions = {}) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['discussions'],
    queryFn: (params: getShopItemsParam) => getShopItems(params),
  });
