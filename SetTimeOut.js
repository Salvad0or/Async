// пришел из браузера. функцию вызывает window
// принимает два параметра, функцию и кол-во милесекунд

setTimeout(() => {
    console.log('H')
}, 1000); // браузер регистрирует данную функцию и начинает ждать

// EventLoop - итератор который делает итерации по очереди и закидывает их в CallStack