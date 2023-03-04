import { ValidSchema } from "../../../validation/validSchema";
import { projectSchema } from "../../../validation/schema/newProjectSchema";
import { makeNewProjectUsecase } from "../usecases/newProject";
import { Create } from "../../../presentational/controllers/create";

export function makeNewProjectController() {
  const validSchema = new ValidSchema(projectSchema);
  const newProjectUsecase = makeNewProjectUsecase();
  return new Create( newProjectUsecase, validSchema);
}
