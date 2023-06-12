const fakeData = [
  {
    id: 1,
    name: "Usuário Total",
    job: "Desenvolvedor",
    count: 0,
    email: "total@example.com",
    password: "senha",
    permissions: ["deletarUsuário", "atualizarUsuário"], // Permissão total
  },
  {
    id: 2,
    name: "Usuário A",
    job: "Desenvolvedor",
    count: 0,
    email: "usuarioa@example.com",
    password: "senha",
    permissions: ["deletarUsuário"], // Permissão para deletar usuário apenas
  },
  {
    id: 3,
    name: "Usuário B",
    job: "Desenvolvedor",
    count: 0,
    email: "usuariob@example.com",
    password: "senha",
    permissions: ["atualizarUsuário"], // Permissão para atualizar usuário apenas
  },
];

module.exports = fakeData;
