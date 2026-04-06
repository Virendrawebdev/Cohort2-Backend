import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default function ArenaResponse({ solution1, solution2, judge }) {
  useEffect(() => {
    hljs.highlightAll();
  }, [solution1, solution2]);

  return (
    <div className="flex flex-col gap-8 my-8 px-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Solution 1 */}
        <div className="bg-white border border-gray-300 rounded-3xl p-8 shadow-sm flex flex-col transition-all hover:shadow-md">
          <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Solution 1
          </h3>
          <div className="text-gray-700">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-6 mb-4 text-gray-900" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-xl font-bold mt-5 mb-3 text-gray-900" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-lg font-bold mt-4 mb-2 text-gray-900" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-gray-700" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-1" {...props} />,
                a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-500 underline" {...props} />,
                code: ({node, inline, className, children, ...props}) => {
                  return !inline ? (
                    <div className="rounded-xl overflow-hidden my-4 border border-gray-200">
                       <pre className="p-4 bg-gray-100 overflow-x-auto text-sm text-gray-900">
                         <code className={className} {...props}>
                           {children}
                         </code>
                       </pre>
                    </div>
                  ) : (
                    <code className="bg-gray-200 text-gray-900 px-1.5 py-0.5 rounded-md text-sm font-mono" {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            >{solution1}</ReactMarkdown>
          </div>
        </div>

        {/* Solution 2 */}
        <div className="bg-white border border-gray-300 rounded-3xl p-8 shadow-sm flex flex-col transition-all hover:shadow-md">
          <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-500"></span> Solution 2
          </h3>
          <div className="text-gray-700">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-6 mb-4 text-gray-900" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-xl font-bold mt-5 mb-3 text-gray-900" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-lg font-bold mt-4 mb-2 text-gray-900" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-gray-700" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-1" {...props} />,
                a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-500 underline" {...props} />,
                code: ({node, inline, className, children, ...props}) => {
                  return !inline ? (
                    <div className="rounded-xl overflow-hidden my-4 border border-gray-300">
                       <pre className="p-4 bg-gray-900 overflow-x-auto text-sm text-gray-100">
                         <code className={className} {...props}>
                           {children}
                         </code>
                       </pre>
                    </div>
                  ) : (
                    <code className="bg-gray-100 text-gray-900 px-1.5 py-0.5 rounded-md text-sm font-mono" {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            >{solution2}</ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Judge Panel */}
      {judge && (
        <div className="mt-4 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-3xl p-8 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 flex items-center gap-3 mb-6">
            ⚖️ Judge Recommendations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm">
                <span className="font-medium text-gray-600">Solution 1 Score</span>
                <span className="text-2xl font-bold text-emerald-600">{judge.solution_1_score}/10</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed px-2">
                {judge.solution_1_reasoning}
              </p>
            </div>
            <div className="space-y-4">
               <div className="flex justify-between items-center bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm">
                <span className="font-medium text-gray-600">Solution 2 Score</span>
                <span className="text-2xl font-bold text-violet-600">{judge.solution_2_score}/10</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed px-2">
                {judge.solution_2_reasoning}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}