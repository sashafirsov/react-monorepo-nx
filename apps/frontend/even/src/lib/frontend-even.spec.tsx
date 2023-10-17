import { render } from '@testing-library/react';

import FrontendEven from './frontend-even';

describe('FrontendEven', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendEven />);
    expect(baseElement).toBeTruthy();
  });
});
