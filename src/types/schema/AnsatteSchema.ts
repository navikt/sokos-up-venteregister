import { z } from "zod";

export const AnsatteSchema = z.object({
  id: z.number(),
  name: z.string(),
  profession: z.string(),
});

export const AnsatteListSchema = z.array(AnsatteSchema);
