function waitTwoSeconds(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done Waiting!');
    }, 2000);
  });
}

async function runAsync(): Promise<void> {
  try {
    const message = await waitTwoSeconds();
    console.log(message);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

runAsync();
