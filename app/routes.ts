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
    route("insights", "routes/app/insights.tsx"),
    route("settings", "routes/app/settings.tsx"),
    route("launch", "routes/app/launch.tsx"),
    route("explore/search", "routes/app/search.tsx"),

    //dynamic routes with loaders
    route("explore/meme/:memeId", "routes/app/meme.tsx"),
  ]),
] satisfies RouteConfig;
