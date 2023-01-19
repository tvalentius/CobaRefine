import React from "react";

import { Refine } from "@pankod/refine-core";

import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import { HeadlessInferencer } from "@pankod/refine-inferencer/headless";

function App() {
  return (
    <Refine
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      routerProvider={routerProvider}
      resources={[
        {
          name: "products",
          list: HeadlessInferencer,
          show: HeadlessInferencer
        },
      ]}
    />
  );
}

export default App;
