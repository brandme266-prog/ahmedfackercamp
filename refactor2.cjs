const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Replace {currentView === 'home' && ( with <Routes><Route path="/" element={
code = code.replace(
  "{currentView === 'home' && (",
  "<Routes>\n          <Route path=\"/\" element={"
);

// We need to close the element for Route path="/", and start the Route path="/article/:id"
// The end of the home section is just before {currentView === 'article'
// Let's find "{currentView === 'article' && activeArticle && ("
const articleStartMatch = "{currentView === 'article' && activeArticle && (";
const articleStartPos = code.indexOf(articleStartMatch);

if (articleStartPos !== -1) {
  // Replace the closing `)}` of the home section
  const homeEndMatch = ")}\n\n        {currentView === 'article' && activeArticle && (";
  code = code.replace(
    homeEndMatch,
    "}\n          />\n\n          <Route path=\"/article/:id\" element={<ArticleView />} />\n        </Routes>"
  );

  // Extract the article view code to a new component
  const articleViewContentStart = code.indexOf('<article className="article-reader-container">');
  const mainEnd = code.indexOf('</main>');
  const articleViewContent = code.substring(articleViewContentStart, mainEnd).replace(')}', '').trim();

  const articleViewComponent = `
function ArticleView() {
  const { id } = useParams();
  const activeArticle = ARTICLES.find(a => a.id === id);
  if (!activeArticle) return <div style={{padding: '100px', textAlign: 'center'}}>مقال غير موجود</div>;
  
  return (
    ${articleViewContent}
  );
}
`;

  // Append ArticleView outside of App
  code = code + "\n" + articleViewComponent;
  
  // Remove the old article view code from inside main
  code = code.substring(0, articleViewContentStart) + "\n      </main>" + code.substring(mainEnd + 7);
  
} else {
  console.log("Could not find article section");
}

// Fix header currentView checks
code = code.replace(/currentView === 'home'/g, "isHome");
code = code.replace(/currentView !== 'home'/g, "!isHome");

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx fully refactored for router.');
