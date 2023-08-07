import Image from 'next/image';
import Link from 'next/link';
import styles from './SimpleCard.module.scss';

export type CardProps = {
  content: string;
  thumbnail: string;
  link: string;
};

export const SimpleCard: React.FC<CardProps> = ({
  content,
  thumbnail,
  link,
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
        </figure>
        <p className={styles.content}>{content}</p>
      </div>
    </Link>
  );
};
