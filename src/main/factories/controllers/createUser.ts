import { Create } from "../../../presentational/controllers/create";
import { userSchema } from "../../../validation/schema/createUserSchema";
import { ValidSchema } from "../../../validation/validSchema";
import { makeCreateUserUsecase } from "../usecases/createUserUsecase";

export function makeCreateUserController(){
    const createUserUsecase = makeCreateUserUsecase()
    const validSchema  = new ValidSchema(userSchema);
    return new Create(createUserUsecase, validSchema);
}