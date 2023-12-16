import { render, screen } from "@testing-library/react"

import App from './App'

describe('Jest', () => {
  it('hello world', async () => {
    render(<App />)
    const title = await screen.findByText(/hello world/i)
    expect(title).toBeInTheDocument()
  })
})