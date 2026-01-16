const PISTON_API = 'https://emkc.org/api/v2/piston';

const LANGUAGES = {
  javascript: {
    name: 'JavaScript',
    version: '18.15.0',
  },
  python: {
    name: 'Python',
    version: '3.10.0',
  },
  java: {
    name: 'Java',
    version: '15.0.2',
  },
};

export const executeCode = async (language, code) => {
  try {
    const languageConfig = LANGUAGES[language];

    if (!languageConfig) {
      return {
        success: false,
        output: `Unsupported language: ${language}`,
      };
    }

    const result = await fetch(PISTON_API + '/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: language,
        version: languageConfig.version,
        files: [
          {
            name: `main.${getFileExtension(language)}`,
            content: code,
          },
        ],
        stdin: '',
        args: [],
        compile_timeout: 10000,
        run_timeout: 10000,
        compile_memory_limit: -1,
        run_memory_limit: -1,
      }),
    });

    if (!result.ok) {
      return {
        success: false,
        output: `Error: ${result.status} ${result.statusText}`,
      };
    }

    const data = await result.json();

    if (data.run.stderr) {
      return {
        success: false,
        output: data.run.output || '',
        error: data.run.stderr || '',
      };
    }

    return {
      success: true,
      output: data.run.output || '',
    };
  } catch (error) {
    return {
      success: false,
      output: `Error: ${error.message}`,
    };
  }
};

const getFileExtension = (language) => {
  const extensions = {
    javascript: 'js',
    python: 'py',
    java: 'java',
  };
  return extensions[language] || 'txt';
}