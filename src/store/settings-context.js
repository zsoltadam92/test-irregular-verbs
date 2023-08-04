import React from "react";

const SettingsContext = React.createContext({
  formValues: {
    numberOfVerbs: "",
    verbFormData: "",
    time: "",
  },
  getFormData: () => {},
  // settingsDone: "",
  // settingsDoneHandler: () => {},
});

export default SettingsContext;
