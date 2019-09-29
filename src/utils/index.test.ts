import { timeToText } from './index';

test('time stamp to text', () => {
  expect(timeToText(1564391962553)).toBe('2019/07/29');
});
