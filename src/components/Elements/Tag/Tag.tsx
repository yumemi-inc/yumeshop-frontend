import { Tag as TagType } from '../../../../api/@types';
import styles from './Tag.module.scss';

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
