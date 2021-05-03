import React, { createContext, useState } from 'react';

const baseSettings = {
    size: 14,
}
export const settingsContext = createContext({});

export default function SettingsContext(props) {
  const [settings, changeSettings] = useState({
    ...baseSettings,
    changeSettings: (key, val) => {
      const newSettings = { ...settings }
      newSettings[key] = val;
      changeSettings(newSettings);
    }
  })
  
  return (
    <settingsContext.Provider value={settings}>
      { props.children }
    </settingsContext.Provider>
  )
}