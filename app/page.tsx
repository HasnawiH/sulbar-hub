'use client';
import HomePageMobile from "./home/Mobile"
import HomePageDesktop from "./home/Desktop";

export default function HomePage() {
  return(
    <div>
      {/* <div className="hidden md:grid"> */}
        <HomePageDesktop/>
      {/* </div>
      <div className="grid md:hidden">
        <HomePageMobile/>
      </div> */}
    </div>
  )
}
