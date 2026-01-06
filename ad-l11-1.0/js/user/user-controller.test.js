const UserController = require("./user-controller");
const User = require("./user");


test('add user to userController', () => {    
  const userController = new UserController();
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {   
  const userController = new UserController(); 
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


test('add a user that is not in the list ', () => {
  const userController = new UserController();
  let user = new User(4321, "Pedro", "pedropicapiedras@gmail.com");
  userController.add(user);

  expect(userController.getUsers().length).toBe(1);
  expect(userController.getUsers()).toContain(user);
});

test('remove not change the list when the user is not in the list', () => {
  const userController = new UserController();
  let user1 = new User(4321, "Pedro", "pedropicapiedras@gmail.com");
  let user2 = new User(7654, "Pablo", "pablomarmol@gmail.com");

  userController.add(user1);
  userController.remove(user2);

  expect(userController.getUsers().length).toBe(1);
  expect(userController.getUsers()).toContain(user1);
});

test('findByEmail return the correct user email exists', () => {
  const userController = new UserController();
  let user1 = new User(4321, "Pedro", "pedropicapiedras@gmail.com");
  let user2 = new User(7654, "Pablo", "pablomarmol@gmail.com");

  userController.add(user1);
  userController.add(user2);

  const found = userController.findByEmail("pedropicapiedras@gmail.com");

  expect(found).toBe(user1);
  expect(found.email).toBe("pedropicapiedras@gmail.com");
});

test('findByEmail return undefined when the email does not exists', () => {
  const userController = new UserController();
  let user = new User(4321, "Pedro", "pedropicapiedras@gmail.com");
  
  userController.add(user);
  
  const found = userController.findByEmail("pablomarmols@gmail.com");
  
  expect(found).toBeUndefined();
});


test('findById return the correct user when id exists', () => {
  const userController = new UserController();
  let user1 = new User(4321, "Pedro", "pedropicapiedras@gmail.com");
  let user2 = new User(7654, "Pablo", "pablomarmol@gmail.com");

  userController.add(user1);
  userController.add(user2);

  const found = userController.findById(4321);

  expect(found).toBe(user1);
  expect(found.id).toBe(4321);
});

test('findById return undefined when id does not exists', () => {
  const userController = new UserController();
  let user1 = new User(4321, "Pedro", "pedropicapiedras@gmail.com");

  userController.add(user1);
  
  const found = userController.findById(7654);

  expect(found).toBeUndefined();
});