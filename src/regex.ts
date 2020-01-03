const escapeRegExp = a => a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getRegex = a0 => {
  let a = a0;
  if (!a) return;
  a = escapeRegExp(a);
  const [f, ...rest] = a.split("");
  a = [f.toLowerCase(), ...rest].join("");
  a = a.replace(/_([A-Z])/g, "$1");
  a = a.replace(/([A-Z])/g, "_$1");
  a = a.toLowerCase();
  a = a.replace(/_/g, ".*");
  if (!a) return;
  const regexp = new RegExp(a, "i");
  return regexp;
};

export { getRegex };
