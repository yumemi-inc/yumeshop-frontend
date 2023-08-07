import styles from './Tag.module.scss';
import { Tag as TagType } from 'api/@types';

export type TagProps = TagType;

export const Tag: React.FC<TagProps> = ({ name, color }) => {
  return (
    <span
      className={styles.wrapper}
      style={
        {
          '--bg-color': color,
        } as React.CSSProperties
      }
    >
      {name}
    </span>
  );
};
