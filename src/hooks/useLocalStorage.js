import { useState, useEffect } from "react"

export default function useLocalStorage() {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem("notes")
    console.log(jsonValue);
    const defaultValue = "# Hello 👋🏻 Welcome to your average note app. \n\nthis is an easy-to-use app for you to take notes on your browser without absolutely no hassle! It keeps your info on local storage and uses **markdown** so you can create your notes with your personal flair to them. \n\nif this is your first time using markdown, check out this [guide](https://www.markdownguide.org/). It will teach you everything you need to know about it! for those who are lazy and don't want to check the guide, the toolbar will help you out massively.";
    if (jsonValue != null) return JSON.parse(jsonValue)
    else{
      return defaultValue
    }
  })
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(value))
  }, [value])

  return [value, setValue]
}