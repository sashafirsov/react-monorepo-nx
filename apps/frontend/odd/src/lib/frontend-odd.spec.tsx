import { render } from '@testing-library/react';

import FrontendOdd from './frontend-odd';

describe('FrontendOdd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendOdd />);
    expect(baseElement).toBeTruthy();
  });
});
