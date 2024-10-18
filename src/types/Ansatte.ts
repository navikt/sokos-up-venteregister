import { z } from "zod";

const AnsatteSchema = z.object({
  id: z.number(),
  name: z.string(),
  profession: z.string(),
});

export const AnsatteListeSchema = z.array(AnsatteSchema);

export type AnsatteList = z.infer<typeof AnsatteListeSchema>;

export type Ansatte = z.infer<typeof AnsatteSchema>;
