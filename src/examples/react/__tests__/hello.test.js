import * as React from 'react';
import renderer from 'react-test-renderer';
import Hello from '../hello';

test('renders correctly', () => {
  const tree = renderer.create(
    <Hello name="John" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
