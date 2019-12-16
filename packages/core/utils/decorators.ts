
export function runIfPropIsTrue<T = any>(prop: string, func: T extends ((...args: infer A) => infer U) ? (...args: A) => U | void : () => any | void) {
  const decorated = function(...args) {
    if (this[prop] !== true) return;
    return func.apply(this, args);
  };
  return decorated as (typeof func);
}
