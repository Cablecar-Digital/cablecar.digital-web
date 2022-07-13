import { createContext, useContext, useState, useEffect, FC, ReactNode } from  "react";
import ReactGA from "react-ga"
import Router from 'next/router';

export interface ITrackingContext {
  logEvent: (props: any) => any
}

const defaultContext: ITrackingContext = {
  logEvent: (props: any) => null
}
const TrackingContext = createContext(defaultContext);
const TrackingID = "UA-322925685-1";

const TrackingProvider: FC<{children: ReactNode}> = ({ children }) => {

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
    const handleRouteChange = (url: string)  => {
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
      value={{ logEvent }}>
      {children}
    </TrackingContext.Provider>
  )
}

const useTracking = () => useContext<ITrackingContext>(TrackingContext);

export { TrackingProvider, useTracking };
