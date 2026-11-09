export class HyperagentError extends Error {
  constructor(
    message: string,
    public statusCode?: number
  ) {
    super(`[Agent Run Cache]: ${message}`);
    this.name = "HyperagentError";
  }
}
