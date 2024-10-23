import { z } from "zod";
import { AnsatteListSchema, AnsatteSchema } from "./schema/AnsatteSchema";

export type AnsatteList = z.infer<typeof AnsatteListSchema>;

export type Ansatte = z.infer<typeof AnsatteSchema>;
