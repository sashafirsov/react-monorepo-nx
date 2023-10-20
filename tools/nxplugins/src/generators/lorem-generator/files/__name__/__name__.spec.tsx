import { render } from '@testing-library/react';

import Lorem_<%= name %> from './<%= name %>_';

describe('Lorem_<%= name %>', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lorem_<%= name %> />);
    expect(baseElement).toBeTruthy();
  });
});
