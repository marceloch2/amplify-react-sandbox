import React, { useState } from 'react'
import { Amplify } from 'aws-amplify'

import {
  createTheme,
  defaultTheme,
  AmplifyProvider,
  ColorMode,
  Card,
  Text,
  ToggleButton,
  ToggleButtonGroup,
  Authenticator,
} from '@aws-amplify/ui-react'

import '@aws-amplify/ui-react/styles.css'

import awsExports from './aws-exports'
Amplify.configure(awsExports)

export default function App() {
  const [colorMode, setColorMode] = useState('system')
  const theme = createTheme({
    name: 'dark-mode-theme',
    overrides: [
      {
        colorMode: 'dark',
        tokens: {
          colors: {
            neutral: {
              // flipping the neutral palette
              10: defaultTheme.tokens.colors.neutral[100],
              20: defaultTheme.tokens.colors.neutral[90],
              40: defaultTheme.tokens.colors.neutral[80],
              80: defaultTheme.tokens.colors.neutral[40],
              90: defaultTheme.tokens.colors.neutral[20],
              100: defaultTheme.tokens.colors.neutral[10],
            },
            black: { value: '#fff' },
            white: { value: '#000' },
          },
        },
      },
    ],
  })
  return (
    <AmplifyProvider theme={theme} colorMode={colorMode}>
      <Card>
        <ToggleButtonGroup
          value={colorMode}
          isExclusive
          onChange={(value: ColorMode) => setColorMode(value)}
        >
          <ToggleButton value='light'>Light</ToggleButton>
          <ToggleButton value='dark'>Dark</ToggleButton>
          <ToggleButton value='system'>System</ToggleButton>
        </ToggleButtonGroup>
        <Text>Current color mode: {colorMode}</Text>
      </Card>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </AmplifyProvider>
  )
}
