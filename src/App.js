// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Exchanges from "./components/Exchanges";
// import Coins from "./components/Coins";
// import CoinDetails from "./components/CoinDetails";
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Exchanges />} />
//       <Route path="/coins" element={<Coins />} />
//       <Route path="/coins/:id" element={<CoinDetails />} />
//     </Routes>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import TradingViewWidget from "./components/TradingViewWidget.jsx";
// import Exchanges from "./components/Exchanges";
// import Coins from "./components/Coins";
// import CoinDetails from "./components/CoinDetails";

// const App = () => (
//   <Router>
//     <Switch>
//       <Route exact path="/" component={Exchanges} />
//       <Route exact path="/coins" component={Coins} />
//       <Route exact path="/coins/:id" component={CoinDetails} />
//       <Route path="/tradingviewWidget/:symbol" component={TradingViewWidget} />
//     </Switch>
//   </Router>
// );

// export default App;
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import TradingViewWidget from "./components/TradingViewWidget";
import { useParams } from "react-router-dom"; // Import useParams

function App() {
  return (
    <Routes>
      <Route path="/" element={<Exchanges />} />
      <Route path="/coins" element={<Coins />} />
      <Route path="/coins/:id" element={<CoinDetails />} />
      {/* Add the route for the TradingViewWidget */}
      <Route path="/tradingview/:symbol" element={<TradingViewWithSymbol />} />
    </Routes>
  );
}

// Define TradingViewWithSymbol component to handle the TradingViewWidget route
const TradingViewWithSymbol = () => {
  const { symbol } = useParams();

  return <TradingViewWidget symbol={symbol} />;
};

export default App;
