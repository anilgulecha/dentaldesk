export function PromiseAllWithDelay(methods, delay=300) {
    return methods.reduce((promiseChain, currentMethod, index) => {
        return promiseChain
            .then((results) => {
                // Wait for delay if it's not the first method
                if (index > 0) {
                    return new Promise((resolve) => setTimeout(resolve, delay)).then(() => results);
                }
                return results;
            })
            .then((results) => {
                // Run the current method and add its result to the results array
                return currentMethod().then((result) => [...results, result]);
            });
    }, Promise.resolve([])); // Start with an empty resolved promise
}