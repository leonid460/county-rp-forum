export function pathJoin(parts: string[], separator = '/') {
  const replace = new RegExp(separator + '{1,}', 'g');

  return parts.join(separator).replace(replace, separator);
}
