import type { RouteRecord } from 'vite-react-ssg';
import App from './App';
import Landing from './pages/Landing';
import Privacy from './pages/Privacy';
import Support from './pages/Support';
import Terms from './pages/Terms';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    entry: 'src/App.tsx',
    children: [
      { index: true, element: <Landing />, entry: 'src/pages/Landing.tsx' },
      { path: 'support', element: <Support />, entry: 'src/pages/Support.tsx' },
      { path: 'privacy', element: <Privacy />, entry: 'src/pages/Privacy.tsx' },
      { path: 'terms', element: <Terms />, entry: 'src/pages/Terms.tsx' },
    ],
  },
];
