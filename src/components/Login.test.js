import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Longin/Login';

test('username input should be rendered', () => {
  render(<Login />);

  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test('password input should be rendered', () => {
  render(<Login />);

  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test('button should be rendered', () => {
  render(<Login />);

  const buttonEl = screen.getByRole('button');
  expect(buttonEl).toBeInTheDocument();
});

test('username input should be empty', () => {
  render(<Login />);

  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe('');
});
test('password input should be empty', () => {
  render(<Login />);

  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe('');
});
test('button should be desabled', () => {
  render(<Login />);

  const buttonEl = screen.getByRole('button');
  expect(buttonEl).toBeDisabled();
});

test('error message should not be visible', () => {
  render(<Login />);

  const errmsg = screen.getByTestId('error');
  expect(errmsg).not.toBeVisible();
});

test('username input should change', () => {
  render(<Login />);

  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = 'test';

  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect(userInputEl.value).toBe(testValue);
});

test('password input should change', () => {
  render(<Login />);

  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = 'test';

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test('button should not be disabled when inputs exist', () => {
  render(<Login />);

  const buttonEl = screen.getByRole('button');
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test';

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});
