import { useMemo, lazy, Suspense } from 'react';
import './App.css'
import './styles/animation.css'

  const years = {
    '2024': lazy(() => import('./years/2024')),
    '2025': lazy(() => import('./years/2025')),
    '2026': lazy(() => import('./years/2026')),
  };

function App() {
  const params = useMemo(() => {
    const search = window.location.search;
    return new URLSearchParams(search);
  }, []);

  const year = useMemo(() => {
    const paramsYear = params.get('year');
    if (!paramsYear) {
      const thisYear = new Date().getFullYear();
      params.set('year', thisYear);
      window.location.search = params.toString();
      
      return thisYear;
    }

    return paramsYear
  }, [params]);

  const HappyBirtday = useMemo(() => {
    let Element = years[year];
    if (!Element) {
      const yearsEntries = Object.entries(years);
      Element = yearsEntries[yearsEntries.length - 1][1];
    }
    return Element;
  }, [year]);

  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <HappyBirtday />
      </Suspense>
    </div>
  )
}

export default App
