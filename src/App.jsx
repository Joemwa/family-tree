import React from "react";
import FamilyViewer from "./familyViewer";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <FamilyViewer rootId={1} />
    </div>
  );
}

export default App;
