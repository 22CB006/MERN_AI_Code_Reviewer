import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github.css";
import axios from "axios";

function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, [code]);

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review/", { code });

      // Properly formatted review output for Markdown
      const formattedReview = `### AI Code Review:\n\n\`\`\`javascript\n${response.data.review || response.data}\n\`\`\``;
      setReview(formattedReview);
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("⚠️ Error fetching review. Please try again.");
    }
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCode(e.target.result);
      };
      reader.readAsText(file);
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-200 p-8">
      {/* Header */}
      <header className="w-full text-center py-5 text-3xl font-semibold text-gray-100 bg-gray-800 shadow-md rounded-lg">
        AI Code Reviewer 🤖
      </header>

      <div className="flex flex-row gap-8 w-full max-w-6xl mt-6 h-[80vh]">
        {/* Code Editor Section */}
        <div className="w-1/2 h-full bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col">
          <label className="block mb-4 text-gray-400 text-sm font-medium">
            Upload your code file:
          </label>
          <input
            type="file"
            accept=".js, .py, .css, .cpp, .cs, .ts, .html, .json, .java"
            onChange={handleFileUpload}
            className="w-full mb-4 p-2 text-gray-200 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 border border-gray-600 outline-none transition"
          />

          <div className="border border-gray-600 rounded-lg p-4 bg-gray-900 flex-grow">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: "Fira Code, monospace",
                fontSize: 14,
                backgroundColor: "transparent",
                color: "#E0E0E0",
              }}
            />
          </div>

          <button
            onClick={reviewCode}
            className="w-full mt-5 py-3 text-lg font-medium text-white bg-slate-950 hover:bg-zinc-400 rounded-lg shadow-md transition duration-300"
          >
            Analyze Code 🤖
          </button>
        </div>

        {/* Review Section */}
        <div className="w-1/2 h-full bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">AI Code Analysis</h2>
          <div
            className="text-blue-800 text-sm bg-gray-900 p-4 rounded-md border border-gray-600 overflow-y-auto flex-grow"
            style={{
              whiteSpace: "pre-wrap", // Ensures text wraps properly
              wordBreak: "break-word", // Prevents horizontal scrolling
              overflowX: "hidden", // Disable left-right scrolling
              maxWidth: "100%", // Ensures text stays within bounds
              color: "#E0E0E0", // Improved text visibility
            }}
          >
            <Markdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]}>
              {review}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

