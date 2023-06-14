import React, { ReactNode } from "react";
import Header from "./Header";
import Menu from "./Menu";


export default function Layout({ username }) {
  return(
    <div>
      <Header username={username} />
    </div>
  )

}
