export type HttpError = {
  err: { message: string };
};

export type Result = {
  result: string;
};
export const httpError: HttpError = {
  err: { message: 'internal server error' },
}

export const postMyAddressMock: Result = {
  result: 'ok',
}