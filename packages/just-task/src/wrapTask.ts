export function wrapTask(fn: any) {
  return function wrapFunction(done: any) {
    let origFn = fn;
    if (fn.unwrap) {
      origFn = fn.unwrap();
    }

    if (origFn.length > 0) {
      (fn as any).call(null, done);
    } else {
      let results = (origFn as any).call();

      // The result is a function, we will assume that this is a task function to be called
      if (results && typeof results === 'function') {
        return results.call(null, done);
      } else if (results && results.then) {
        return results;
      }

      done();
    }
  };
}
