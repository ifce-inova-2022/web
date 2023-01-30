import { Rest } from "./rest";

export class UserService extends Rest {
  constructor() {
    super('/user')
  }

  
}