import React, { createContext, useContext } from 'react';
import schema from './schema';

// data.json, normalized once at module load and never touched again. This
// mirrors the old Redux reducer (formerly src/reducers/data.js), which
// always returned the same initial state; building the value here, outside
// any component, keeps that same stable reference so consumers never
// re-render for a change that cannot happen.
const siteData = {
  entities: schema.entities,
  sections: schema.result.sections,
};

const SiteDataContext = createContext(undefined);

export function SiteDataProvider({ children }) {
  return (
    <SiteDataContext.Provider value={siteData}>
      {children}
    </SiteDataContext.Provider>
  );
}

// The seam: every container reads site content through this hook and never
// learns where it comes from. Today it's normalizr's output from
// data.json; if the source ever changes (a real backend, Redux again),
// only this module's internals change.
export function useSiteData() {
  const context = useContext(SiteDataContext);
  if (context === undefined) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
}
