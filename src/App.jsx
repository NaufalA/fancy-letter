import { useMemo } from 'react';
import './App.css'
import './styles/animation.css'
import { Year2024 } from './years'

function App() {
  const params = useMemo(() => {
    const search = window.location.search;
    return new URLSearchParams(search);
  }, []);

  const year = useMemo(() => {
    if (!params.get('year')) {
      const thisYear = new Date().getFullYear();
      params.set('year', thisYear);
      window.location.search = params.toString();
      
      return thisYear;
    }
  }, [params]);

  const years = useMemo(() => ({
    '2024': Year2024,
  }), [])

  const HappyBirtday = useMemo(() => {
    let Element = years[year];
    if (!Element) {
      const yearsEntries = Object.entries(years);
      Element = yearsEntries[yearsEntries.length - 1][1];
    }
    return Element;
  }, [year, years]);

  return (
    <div className="container">
      <HappyBirtday />
    </div>
  )
}

export default App
