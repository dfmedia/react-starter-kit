export function convertUnicode(input) {
  return input.replace(/\\u[\dA-F]{4}/gi,
    match =>
      String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16)),
    );
}
