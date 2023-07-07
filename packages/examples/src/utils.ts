export function syntaxHighlight(json: any) {
  if (!json) return '';

  const getClassName = (match) => {
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        return 'key';
      } else {
        return 'string';
      }
    } else if (/true|false/.test(match)) {
      return 'boolean';
    } else if (/null/.test(match)) {
      return 'null';
    }
    return 'number;'
  };

  return json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      const className = getClassName(match)
      return `<span class="${className}">${match}</span>`;
    }
  );
}
