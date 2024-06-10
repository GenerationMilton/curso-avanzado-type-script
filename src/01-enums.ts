enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER ="customer",

}

type User = {
  username:string;
  role:ROLES;
}

const miltonUser: User ={
  username: 'livemilton',
  role: ROLES.SELLER

}


