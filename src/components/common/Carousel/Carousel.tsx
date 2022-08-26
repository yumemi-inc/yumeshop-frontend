import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';

type CarouselProps = {
  children: ReactNode[];
  dotButton?: boolean;
  options?: EmblaOptionsType;
};

export const Carousel: FC<CarouselProps> = ({
  children,
  options = {},
  dotButton = false,
}) => {
  const [viewportRef, carousel] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollTo = useCallback(
    (index) => carousel && carousel.scrollTo(index),
    [carousel],
  );
  const onSelect = useCallback(() => {
    if (!carousel) return;
    setSelectedIndex(carousel.selectedScrollSnap());
  }, [carousel, setSelectedIndex]);

  useEffect(() => {
    if (!carousel) return;
    onSelect();
    setScrollSnaps(carousel.scrollSnapList());
    carousel.on('select', onSelect);
  }, [carousel, setScrollSnaps, onSelect]);

  return (
    <div css={{ position: 'relative' }}>
      <div ref={viewportRef} css={{ overflow: 'hidden' }}>
        <ul css={{ display: 'flex', listStyleType: 'none' }}>
          {children.map((child, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>{child}</li>
          ))}
        </ul>
      </div>

      {dotButton && (
        <div
          css={{
            display: 'flex',
            gap: '4px',
            position: 'absolute',
            left: '50%',
            bottom: 10,
            transform: 'translateX(-50%)',
            textAlign: 'center',
          }}
        >
          {scrollSnaps.map((_, index) => (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              css={{
                width: 15,
                height: 15,
                borderRadius: 999,
                border: 'none',
                backgroundColor: index === selectedIndex ? 'gray' : '',
              }}
              type="button"
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
