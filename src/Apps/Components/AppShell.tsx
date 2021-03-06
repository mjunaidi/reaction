import { Box } from "@artsy/palette"
import React from "react"

import { NavBar } from "Components/NavBar"

export const AppShell = props => {
  const { children } = props

  return (
    <Box width="100%">
      <Box pb={6}>
        <Box left={0} position="fixed" width="100%" zIndex={100}>
          <NavBar />
        </Box>
      </Box>

      <Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  )
}
