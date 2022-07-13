import { createContext, useContext, useState, useEffect } from  "react";
import ReactGA from "react-ga"
import Router from 'next/router';

const TrackingID = "UA-322925685-1";
const TrackingContext = createContext();

function TrackingProvider(props) {
  const { userIdThatMightChange } = props

  const [analytics, setAnalytics] = useState({
     isInitialized: false,
     trackers: ['myDefaultTracker']
  });
    console.log({analytics})

  const logEvent = ({ category = '', action = '', label = '' }) => {
    if (analytics.isInitialized) {
      ReactGA.event({
        category,
        action,
        label
      }, analytics.trackers)
    }
  }

  useEffect(() => {

    const handleRouteChange = url  => {
      ReactGA.set({ page:  url }, analytics.trackers);
      ReactGA.pageview(url, analytics.trackers);
    }
    if (!analytics.isInitialized) {
      ReactGA.initialize(TrackingID)
      setAnalytics(prev  => ({
        ...prev,
        isInitialized:  true,
      }));
      Router.events.on('routeChangeComplete', handleRouteChange);
    }
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [setAnalytics, analytics]);

  return (
    <TrackingContext.Provider
      value={{ logEvent }}
      {...props}
    />
  )
}

const useTracking = () => useContext(TrackingContext);

export { TrackingProvider, useTracking };
