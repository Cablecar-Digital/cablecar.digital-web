import { createContext, useContext, useState, useEffect, FC, ReactNode } from  "react";
import ReactGA from "react-ga4"
import Router from 'next/router';

export interface ITrackingContext {
  logEvent: (props: any) => any
}

const defaultContext: ITrackingContext = {
  logEvent: (props: any) => null
}
const TrackingContext = createContext(defaultContext);
const TrackingID = "G-V6SKFTNVP9";

const TrackingProvider: FC<{children: ReactNode}> = ({ children }) => {

  const [analytics, setAnalytics] = useState({
     isInitialized: false,
  });

  const logEvent = ({ category = '', action = '', label = '' }) => {
    if (analytics.isInitialized) {
      ReactGA.event({
        category,
        action,
        label
      })
    }
  }

  useEffect(() => {
    const handleRouteChange = (url: string)  => {
      ReactGA.send({ hitType: "pageview", page: url });
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
