"use client";
import React, { useState } from "react";
import { Copy, Download, Check } from "lucide-react";

interface OutputPreviewProps {
  content: string;
}

const OutputPreview = ({ content }: OutputPreviewProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const downloadFile = () => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "llms.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">Live Preview</h3>
        <div className="flex space-x-2">
          <button
            onClick={copyToClipboard}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
              ${
                copied
                  ? "bg-green-100 text-green-700"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }
            `}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span>{copied ? "Copied!" : "Copy"}</span>
          </button>
          <button
            onClick={downloadFile}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
        <pre className="text-gray-100 whitespace-pre-wrap">{content}</pre>
      </div>

      <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
        <p className="text-sm text-gray-700 mb-2">
          <strong>Next step:</strong> Upload this file to your website&apos;s root
          directory
        </p>
        <code className="text-xs bg-white px-2 py-1 rounded text-purple-600">
          yourstore.com/llms.txt
        </code>
      </div>
    </div>
  );
};

export default OutputPreview;
