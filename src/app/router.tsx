import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

const Home = lazy(() => import('@/pages/Home'))
const Treatments = lazy(() => import('@/pages/Treatments'))
const Doctors = lazy(() => import('@/pages/Doctors'))
const Clinic = lazy(() => import('@/pages/Clinic'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const Contact = lazy(() => import('@/pages/Contact'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        <p className="text-sm text-gray-400">Yükleniyor...</p>
      </div>
    </div>
  )
}

function withSuspense(Component: React.LazyExoticComponent<React.ComponentType>) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: 'tedaviler', element: withSuspense(Treatments) },
      { path: 'hekimlerimiz', element: withSuspense(Doctors) },
      { path: 'klinik', element: withSuspense(Clinic) },
      { path: 'galeri', element: withSuspense(Gallery) },
      { path: 'iletisim', element: withSuspense(Contact) },
    ],
  },
], {
  basename: basename || undefined,
})

export function AppRouter() {
  return <RouterProvider router={router} />
}
