import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('test year output', function () {
  expect(getFullYear()).toBe(2021);
});
test('try getfootercopy with false input', function () {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});
test('try getfootercopy with false input', function () {
  expect(getFooterCopy(true)).toBe('Holberton School');
});
test('testing output for getlastesnotification', function () {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
