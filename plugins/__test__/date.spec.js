import { date } from '~/plugins/date';

describe('date.js', () => {
  beforeEach(() => {});
  test('converting appropriate date string', () => {
    const dateString = date('2020-05-11');
    expect(dateString).toEqual('2020/05/11');
  });
  test('if date string is null, return ""', () => {
    expect(date('')).toEqual('');
  });
});
