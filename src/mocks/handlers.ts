import { HttpResponse, http } from "msw";

export const handlers = [
  // An example handler
  http.get("venteregister/oppdrag-api/api/v1/venteregister/ansatte", () => {
    return HttpResponse.json(
      [
        { id: 1, name: "test", profession: "cleaner" },
        { id: 2, name: "sample", profession: "teacher" },
        { id: 3, name: "example", profession: "developer" },
      ],
      { status: 200 },
    );
  }),
];
