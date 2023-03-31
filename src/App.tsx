import { BrowserRouter, useParams } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import './bootstrap/fontAwesome'
import { PostsProvider } from './contexts/PostsContext'
import { ActivePostProvider } from './contexts/ActivePostContext'
import { GithubProfileProvider } from './contexts/GithubProfileContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GithubProfileProvider>
          <PostsProvider>
            <ActivePostProvider>
              <Router />
            </ActivePostProvider>
          </PostsProvider>
        </GithubProfileProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
