// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest'
import { it, expect, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Collapse from './Collapse'
import { cleanup } from '@testing-library/react'

it('should render the Collapse component with the correct title, content and open/closed states', () => {
    render(<Collapse title="Test title">Test content</Collapse>)
    expect(screen.getByText('Test title')).toBeInTheDocument()
    const content = screen.getByText('Test content')
    expect(content).not.toHaveClass('open')
    fireEvent.click(screen.getByAltText('Test title'))
    expect(content).toHaveClass('open')
    fireEvent.click(screen.getByAltText('Test title'))
    expect(content).not.toHaveClass('open')

    afterEach(() => {
        cleanup()
    })
})