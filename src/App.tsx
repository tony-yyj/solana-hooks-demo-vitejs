import './App.css'
import AppProvider from "./context/AppProvider.tsx";
import ConnectSolana from "./connectSolana.tsx";
import SignIn from "./signIn.tsx";
import AccountInfo from "./accountInfo.tsx";
import Deposit from "./deposit.tsx";

function App() {
  return (
      <AppProvider>

          <ConnectSolana/>

          <SignIn/>

          <AccountInfo/>

          <Deposit/>

      </AppProvider>
  )

}

export default App
