import { render, screen } from "@testing-library/react"

import HelloWorld from "./HelloWorld"

describe("Hello World", () => {
  it("cerrectly render", async () => {
    render(<HelloWorld />)
    const title = await screen.findByText(/hello world/i)
    expect(title).toBeInTheDocument()
  })
})