import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import { Scanning } from './views/Scanning';
import { Results } from './views/Results';
import { ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [targetUrl, setTargetUrl] = useState('');

  const startAudit = (url: string) => {
    setTargetUrl(url);
    setView(ViewState.SCANNING);
  };

  const completeScan = () => {
    setView(ViewState.RESULTS);
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      {view === ViewState.HOME && <Home onStartAudit={startAudit} />}
      {view === ViewState.SCANNING && <Scanning targetUrl={targetUrl} onComplete={completeScan} />}
      {view === ViewState.RESULTS && <Results url={targetUrl} />}
    </Layout>
  );
}

export default App;