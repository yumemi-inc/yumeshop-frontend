/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { FC } from 'react';
import { colors, fontSizes, spacingSizes } from 'src/styles/Tokens';

const menus = [
  ['メニューメニュー', 'メニューメニュー', 'メニュー'],
  ['メニューメニュー', 'メニュー', 'メニュー', 'メニュー'],
  ['メニューメニュー', 'メニューメニュー', 'メニューメニュー'],
];

export const Footer: FC = () => (
  <footer
    css={{
      width: '100%',
      padding: `${spacingSizes.sm}`,
      background: colors.White,
      boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25);',
    }}
  >
    <div
      css={{ display: 'flex', flexDirection: 'column', gap: spacingSizes.xs }}
    >
      {menus.map((menu) => (
        <div
          css={{
            display: 'flex',
            gap: spacingSizes.xs,
          }}
        >
          {menu.map((item) => (
            <div
              css={{
                paddingRight: spacingSizes.xs,
                borderRight: 'solid 1px',
                ':last-child': {
                  border: 'none',
                },
              }}
            >
              <Link href="/">
                <a>
                  <span
                    css={{
                      cursor: 'pointer',
                      fontSize: fontSizes.fontSize12,
                      borderBottom: '0.5px solid',
                    }}
                  >
                    {item}
                  </span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>

    <p
      css={{
        marginTop: spacingSizes.lg,
        textAlign: 'center',
        fontSize: fontSizes.fontSize12,
      }}
    >
      Copyright 2020 YumemiShop
    </p>
  </footer>
);
