import { useState, useEffect } from "react"

export default function useLocalStorage(key,defaultValue) {
    const [data, setData] = useState(() => {
    const localStorageValue = window.localStorage.getItem(key);

    const defaultValue = [{        
        text:"**Your Average Note App**'s markdown syntax highlighting is unique. The refined text formatting of the editor helps you visualize the final rendering of your notes.\n #### Start your journey of noting down from here 👇",
        name:"New Node",
    }]
    // const defaultValue = "**Your Average Note App**'s markdown syntax highlighting is unique. The refined text formatting of the editor helps you visualize the final rendering of your notes.\n #### Start your journey of noting down from here 👇";

    return localStorageValue !== null
      ? JSON.parse(localStorageValue)
      : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData]
}