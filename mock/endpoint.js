export default [
  {
    url: "/venteregister-api/api/v1/ansatte",
    method: "GET",
    response: () => {
      return [
        {
          name: "Ola Nordmann",
          profession: "Tech Lead",
        },
        {
          name: "Kari Nordmann",
          profession: "Prosjektleder",
        },
      ];
    },
  },
];
