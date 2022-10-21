import Feed from "./components/middle/feed";
import Sidebar from "./components/sidebar/sidebar";
import Widgets from "./components/widget/widgets";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}
