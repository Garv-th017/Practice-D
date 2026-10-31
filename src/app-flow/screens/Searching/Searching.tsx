import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { usePreviewMode } from '../../kit/previewMode'
import { TopBar } from '../../kit/TopBar/TopBar'
import { formatDate } from '../../data'
import { useDemo } from '../../kit/demoStore'
import { SearchingProgress } from './sections/SearchingProgress/SearchingProgress'
import { SearchingSkeleton } from './sections/SearchingSkeleton/SearchingSkeleton'
import './Searching.css'

const SEARCH_MS = 1800

export function Searching() {
  const preview = usePreviewMode()
  const navigate = useNavigate()
  const { from, to, date } = useDemo()

  useEffect(() => {
    if (preview) return
    const timer = setTimeout(() => navigate('/app/results', { replace: true }), SEARCH_MS)
    return () => clearTimeout(timer)
  }, [preview, navigate])

  return (
    <AppScreen bare>
      <TopBar back="/app/home" title={`${from} → ${to}`} subtitle={formatDate(date)} />
      <AppBody className="searching__body">
        <SearchingProgress />
        <SearchingSkeleton />
      </AppBody>
    </AppScreen>
  )
}
