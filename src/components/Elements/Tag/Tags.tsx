import { Tag as TagType } from '../../../../api/@types';
import { Tag } from './Tag';
import styles from './Tags.module.scss';

export type TagsProps = { tags: TagType[] };

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <ul className={styles.wrapper}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <Tag {...tag} />
        </li>
      ))}
    </ul>
  );
};
