// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest'
import { it, expect, describe, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import Banner from '../components/Banner/Banner'


describe('Banner component', () => {
    it('should render the Banner component with the correct image and text', () => {
        render(<Banner image="test-image.jpg" text="Test banner" />)
        expect(screen.getByAltText('Test banner')).toBeInTheDocument()
        expect(screen.getByText('Test banner')).toBeInTheDocument()
    })
    it('should not display any text when the text prop is empty', () => {
        render(<Banner image="test-image.jpg" text="" />)
        expect(screen.queryByText('Test banner')).not.toBeInTheDocument()
    })

    afterEach(() => {
        cleanup()
    })
})