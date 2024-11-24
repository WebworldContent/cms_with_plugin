'use client'

import { Provider } from "react-redux";
import { Postpage } from "../components/admin/postPage";
import { Preview } from "../components/admin/preview";
import store from "../store/store";

export default function Form() {
  return (
  <main>
    <Provider store={store}>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
        <Postpage />
        <Preview />
      </div>
    </Provider>
  </main>);
}
