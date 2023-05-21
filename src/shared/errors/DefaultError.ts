export default class DefaultError {
  public readonly message: string | undefined;
  public readonly statusCode: number | undefined;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
