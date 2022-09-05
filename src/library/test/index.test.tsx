import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Com from './index';

describe('<Com />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi';

    render(<Com title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
