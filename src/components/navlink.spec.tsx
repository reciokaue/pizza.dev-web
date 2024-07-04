import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Navlink } from './navlink'

describe('Navlink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <Navlink to="/about">About</Navlink>
        <Navlink to="/home">Home</Navlink>
      </>,
      {
        wrapper: ({ children }) => (
          <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
        ),
      },
    )

    expect(wrapper.getByText('About').dataset.current).toBe('true')
    expect(wrapper.getByText('Home').dataset.current).toBe('false')
  })
})
