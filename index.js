document.addEventListener('DOMContentLoaded', () => {
  const arrayInput = document.getElementById('array-input');
  const functionParam = document.getElementById('function-param');
  const result = document.getElementById('result');
  const functionButtons = document.querySelectorAll('[data-function]');

  functionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let inputArray;

      try {
        inputArray = JSON.parse(arrayInput.value);
      } catch (error) {
        result.textContent = 'Invalid array input!';
        return;
      }

      if (!Array.isArray(inputArray)) {
        result.textContent = 'Input must be an array!';
        return;
      }

      const functionName = button.getAttribute('data-function');
      const param = functionParam.value;

      let output;
      switch (functionName) {
        case 'slice':
          const sliceIndex = parseInt(param, 10) || 0;
          output = inputArray.slice(sliceIndex);
          break;
        case 'push':
          const parsedParam = isNaN(parseInt(param)) ? param : parseInt(param);
          inputArray.push(parsedParam);
          output = inputArray;
          break;
        case 'length':
          output = inputArray.length;
          break;
        case 'indexOf':
          const searchElement = parseInt(param, 10);
          output = inputArray.indexOf(searchElement);
          break;
        case 'trim':
          output = inputArray.map((item) => String(item).trim());
          break;
        case 'map':
          // For demonstration purposes, let's double the elements of the array
          output = inputArray.map((item) => item * 2);
          break;
        case 'Array.from':
          output = Array.from(param);
          break;
        case 'pop':
          inputArray.pop();
          output = inputArray;
          break;
        case 'splice':
          // For demonstration purposes, let's remove one element starting at index 1
          inputArray.splice(1, 1);
          output = inputArray;
          break;
        case 'filter':
          // For demonstration purposes, let's filter even numbers
          output = inputArray.filter((item) => item % 2 === 0);
          break;
        case 'Object.keys':
          output = Object.keys(inputArray[0] || {});
          break;
        case 'reduce':
          output = inputArray.reduce((acc, curr) => acc + curr, 0);
          break;
        case 'every':
          // For demonstration purposes, let's check if all elements are even numbers
          output = inputArray.every((item) => item % 2 === 0);
          break;
        case 'Array.isArray':
          output = Array.isArray(inputArray);
          break;
        case 'concat':
          const secondArray = param.split(',').map(Number);
          output = inputArray.concat(secondArray);
          break;
        case 'forEach':
          inputArray.forEach((item) => console.log(item));
          output = 'Check the console for output';
          break;
        default:
          output = inputArray;
          break;
      }

      result.textContent = JSON.stringify(output);
    });
  });
});
