import { Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { PostDetails } from './pages/PostDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
