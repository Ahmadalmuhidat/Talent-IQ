import './App.css'
import { SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react"

function App() {
  return (
    <>

      <SignOutButton>
        <SignInButton mode='modal' />
      </SignOutButton>

      <SignInButton>
        <signInButton />
      </SignInButton>

      <UserButton />
    </>
  )
}

export default App
