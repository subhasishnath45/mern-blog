// Components
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/articles-list" element={<ArticlesList/>} />
          <Route exact path="/article" element={<Article/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
