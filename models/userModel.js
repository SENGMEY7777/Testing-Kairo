const users = [];

export const userModel = {
  async findByEmail(email) {
    return users.find(user => user.email === email) || null;
  },
  async findById(id) {
    return users.find(user => user.id === id) || null;
  },
  async createUser(userData) {
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    return { id: newUser.id, name: newUser.name, email: newUser.email, createdAt: newUser.createdAt };
  }
};
