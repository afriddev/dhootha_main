"use client";

import HomeMain from "./home/page";
import AppContext from "./utils/AppContext";

function Page() {
  return (
    <div>
      <AppContext>
        <HomeMain />
      </AppContext>
    </div>
  );
}
export default Page;
