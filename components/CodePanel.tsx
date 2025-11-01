'use client';

import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import cpp from 'highlight.js/lib/languages/cpp';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);
hljs.registerLanguage('cpp', cpp);

interface CodePanelProps {
  code: string;
  language?: string;
  highlightLines?: number[];
  showLineNumbers?: boolean;
  className?: string;
  title?: string;
}

const CodePanel: React.FC<CodePanelProps> = ({
  code,
  language = 'javascript',
  highlightLines = [],
  showLineNumbers = true,
  className = '',
  title,
}) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const codeLines = code.split('\n');

  return (
    <div className={`cosmic-code-panel ${className}`}>
      {title && (
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-cosmic-slate/30">
          <h3 className="text-sm font-semibold text-cosmic-white">{title}</h3>
          <span className="text-xs text-cosmic-subtle uppercase tracking-wider">
            {language}
          </span>
        </div>
      )}
      <div className="relative overflow-x-auto scrollbar-cosmic">
        <pre className="!bg-transparent !p-0 !m-0">
          <code
            ref={codeRef}
            className={`language-${language} !bg-transparent block`}
          >
            {showLineNumbers ? (
              <div className="table w-full">
                {codeLines.map((line, index) => {
                  const lineNumber = index + 1;
                  const isHighlighted = highlightLines.includes(lineNumber);
                  return (
                    <div
                      key={index}
                      className={`table-row ${
                        isHighlighted ? 'cosmic-code-highlight' : ''
                      }`}
                    >
                      <span className="table-cell pr-4 text-right text-cosmic-subtle select-none w-12">
                        {lineNumber}
                      </span>
                      <span className="table-cell">{line || '\n'}</span>
                    </div>
                  );
                })}
              </div>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodePanel;
