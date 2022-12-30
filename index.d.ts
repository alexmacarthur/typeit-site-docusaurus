declare global {
  interface Window {
    ti_exampleTimeouts: {
      [key: string]: number[];
    }
  }
}

export {};
