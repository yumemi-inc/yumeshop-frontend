import { FC } from 'react';
import { Campaign } from 'src/types/campaign';
import Image from 'next/image';

export type CampaignCardProps = {
  width: string;
  campaign: Campaign;
};
export const CampaignCard: FC<CampaignCardProps> = ({ width, campaign }) => (
  <div
    css={{
      width,
      position: 'relative',
      minWidth: 200,
      height: 280,
      borderRadius: 8,
      overflow: 'hidden',
    }}
  >
    <Image
      src={campaign.thumbnail}
      alt={campaign.name}
      width={200}
      height={200}
      objectFit="contain"
    />
    <p>{campaign.name}</p>
  </div>
);
