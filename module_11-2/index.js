const promiseCallback = (resolve, reject) => {
    try {
        if (true) {
            resolve('It is browser');
        }
    } catch {
        const errorObj = {
            message: 'It is not browser',
            code: 5,
            isCritical: true
        }
        reject(errorObj);
    }
}

const promise = new Promise(promiseCallback);


const onResolve = result => console.log(result);
const onReject = ({code, message, isCritical}) => {
    const result = `The code is: ${code}; Error message: ${message}; Is critical: ${isCritical ? 'Yes': 'No'};`;
    console.log(result);
    return result;
};

promise
    .then(() => {
        return 5
    })
    .then(value => {
        console.log(value);
        return value * 3
    })
    .then(transformedValue => {
        console.log(transformedValue);
        return 'Should finish';
    })
    .then(str => console.log(str))
    .then(str => console.log(str))
    .catch(onReject)
    .finally(() => {
        console.log('Finish!')
    });


new Promise((resolve, reject) => {
    fetch('//url', data)
        .then(data => resolve(data))
        .catch(error => reject(error))
}).then(data => {
        const result = fetch('https://feedbacks.com', data.id)
        return {
            ...data,
            feedbacks: result
        }
    })
    .then(data => {
        // makeRequestToDeliveryAPI => listOfDate
        return {
            ...data,
            listOfDate
        }
    })
.catch(error => console.log(error))