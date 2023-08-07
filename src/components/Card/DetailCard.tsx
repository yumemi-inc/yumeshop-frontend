import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Tags } from '../Elements/Tag';
import styles from './DetailCard.module.scss';
import { Price, Tag } from 'api/@types';

export type DetailCardProps = {
  content: string;
  thumbnail: string;
  link: string;
  tags: Tag[];
  price: Price;
};

export const DetailCard: React.FC<DetailCardProps> = ({
  content,
  thumbnail,
  link,
  tags,
  price,
}) => {
  return (
    <Link href={link}>
      <div className={styles.wrapper}>
        <figure className={styles.thumbnail_wrapper}>
          <Image
            src={thumbnail}
            alt={content}
            fill
            className={styles.thumbnail}
          />
          {price.discounted && (
            <div className={styles.thumbnail__sale}>
              {Math.ceil(price.discount_percentage)}%OFF
            </div>
          )}
        </figure>
        <div className={styles.content}>
          <div className={styles.content__heading}>
            <p>{content}</p>
            <Tags tags={tags} />
          </div>
          <div
            className={styles.content__bottom}
            style={
              {
                '--price-original-color': price.discounted
                  ? '#E20E20'
                  : 'inherit',
              } as React.CSSProperties
            }
          >
            <div className={styles.content__price}>
              税抜
              {price.discounted && (
                <span className={styles.content__price__selling}>
                  {price.selling_price}→
                </span>
              )}
              <span className={styles.content__price__original}>
                {price.original_price}
              </span>
              <span className={styles.content__price__suffix}>円</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
