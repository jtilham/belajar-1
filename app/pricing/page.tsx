// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import ResponsiveAppBar from "../components/ResponsiveAppBar"
export default function Page() {
    return (
    <>
        <ResponsiveAppBar/>
        <h1>Hello, Dashboard pricing</h1>
    </>
    )
  }