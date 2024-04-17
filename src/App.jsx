// import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Navbar from "./components/navbar"
import Courses from "./components/courses"
import Home from "./components/home"
import Mentor from "./components/mentor"
import About from "./components/about"
import Career from "./components/career"
import Tests from "./components/tests"
import Jobs from "./components/jobs"
import Champions_portal from "./components/champions_portal"
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Resources from "./components/resources";

// import './App.css'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<>

        <SignedIn>
          <Courses />
        </SignedIn>

        <SignedOut>

          <RedirectToSignIn />
        </SignedOut>
      </>
      } />
      <Route path="/career" element={<>

        <SignedIn>
          <Career />
        </SignedIn>

        <SignedOut>

          <RedirectToSignIn />
        </SignedOut>
      </>
      } />
      <Route path="/tests" element={<>

        <SignedIn>
          <Tests />
        </SignedIn>

        <SignedOut>

          <RedirectToSignIn />
        </SignedOut>
      </>
      } />
      <Route path="/jobs" element={<>

        <SignedIn>
          <Jobs />
        </SignedIn>

        <SignedOut>

          <RedirectToSignIn />
        </SignedOut>
      </>
      } />
      <Route path="/champions_portal" element={<>

        <SignedIn>
          <Champions_portal />
        </SignedIn>

        <SignedOut>

          <RedirectToSignIn />
        </SignedOut>
      </>
      } />
      <Route path="/mentor" element={<>

        <SignedIn>
          <Mentor />
        </SignedIn>

        <SignedOut>

          <RedirectToSignIn />
        </SignedOut>
      </>
      } />

      < Route path="/resources" element={<>
        <SignedIn>
          <Resources />
        </SignedIn>

        <SignedOut>

          <RedirectToSignIn />
        </SignedOut>
      </>
      } />
      {/*<Route path = "/courses" element={<Courses/> } />
      <Route path = "/courses" element={<Courses/> } />
    <Route path = "/courses" element={<Courses/> } /> */}
    </>))

const App = () => {
  return (
    <>
      <RouterProvider router={router} />


      {/* <Navbar /> */}


    </>
  )
}


export default App;