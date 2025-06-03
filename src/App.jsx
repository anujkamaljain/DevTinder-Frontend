import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import ForgotPass from "./components/ForgotPass";
import TermsandConditions from "./components/TermsandConditions";
import CancellationandRefund from "./components/CancellationandRefund";
import Privacypolicy from "./components/Privacypolicy";
import Contactus from "./components/Contactus";
import Chat from "./components/Chat";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/forgotpassword" element={<ForgotPass />} />
              <Route path="/terms-and-conditions" element={<TermsandConditions />}/>
              <Route path="/cancellation-and-refund-policies" element={<CancellationandRefund />}/>
              <Route path="/privacy-policy" element={<Privacypolicy />}/>
              <Route path="/contact-us" element={<Contactus />}/>
              <Route path="/chat/:targetUserId" element={<Chat />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
