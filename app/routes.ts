import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("*", "routes/$.tsx"),
  //Nested routes
  route("app", "routes/app/app.tsx", [
    route("explore", "routes/app/explore.tsx"),
    route("staking", "routes/app/staking.tsx"),
    route("battles", "routes/app/battles.tsx"),
    route("rewards", "routes/app/rewards.tsx"),
    route("insights", "rou" + "tes/app/insights.tsx"),
    route("settings", "routes/app/settings.tsx"),
  ]),
] satisfies RouteConfig;
