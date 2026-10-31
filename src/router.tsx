import { createBrowserRouter, Navigate } from 'react-router'
import { MainLayout } from './layouts/MainLayout/MainLayout'
import { AppFlowPage } from './pages/AppFlowPage/AppFlowPage'
import { AppScreenPage } from './pages/AppScreenPage/AppScreenPage'
import { FeaturesPage } from './pages/FeaturesPage/FeaturesPage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { StyleGuidePage } from './pages/StyleGuidePage/StyleGuidePage'
import { UserFlowPage } from './pages/UserFlowPage/UserFlowPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // No home page yet: send visitors to Features
      { index: true, element: <Navigate to="/features" replace /> },
      { path: 'features', element: <FeaturesPage /> },
      { path: 'style-guide', element: <StyleGuidePage /> },
      { path: 'app', element: <AppFlowPage /> },
      { path: 'app/:screenId', element: <AppScreenPage /> },
      { path: 'user-flow', element: <UserFlowPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
