import { dateToYYYYMMDD } from 'src/libs/util/dateToYYYYMMDD';

describe('dateToYYYYMMDD()のテスト', () => {
  test('基本的な変換', () => {
    const date = new Date(2022, 10 - 1, 20);
    expect(dateToYYYYMMDD(date)).toBe('2022/10/20');
  });

  test('0埋めが混ざる変換', () => {
    const date = new Date(2022, 9 - 1, 2);
    expect(dateToYYYYMMDD(date)).toBe('2022/09/02');
  });

  test('separatorを指定した変換', () => {
    const date = new Date(2022, 10 - 1, 20);
    expect(dateToYYYYMMDD(date, ' ')).toBe('2022 10 20');
  });

  test('separatorに空文字列を指定した変換', () => {
    const date = new Date(2022, 10 - 1, 20);
    expect(dateToYYYYMMDD(date, '')).toBe('20221020');
  });

  test('separatorにundefinedを指定した変換', () => {
    const date = new Date(2022, 10 - 1, 20);
    expect(dateToYYYYMMDD(date, undefined)).toBe('2022/10/20');
  });
});
