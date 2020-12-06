import React from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ page: Page, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Page {...props} />
      </Layout>
    )} />
)

export default AppRoute;