import axios from "axios";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import { Activity } from "../app/models/activity";

type MainContextData = {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  handleSelectActivity: (id: string) => void;
  handleCancelSelectActivity: () => void;
};

type Props = {
  children: ReactNode;
};

interface Properties {}

export const AppContext = createContext({} as MainContextData);

export const AppContextProvider = ({ children }: Props) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data);
        console.log(activities);
      });
  }, [activities]);
  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  return (
    <AppContext.Provider
      value={{
        activities,
        selectedActivity,
        handleCancelSelectActivity,
        handleSelectActivity
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext)
    throw new Error("You need to use this context inside a provider");
  return appContext;
}; */

export default AppContext;
