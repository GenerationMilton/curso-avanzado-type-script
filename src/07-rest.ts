import { ROLES, User } from './01-enums';

const currentUser: User ={
  username: 'livemilton',
  role: ROLES.CUSTOMER
}

export const checkAdminRole =()=>{
  if(currentUser.role ==='admin'){
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log('checkAdminRole', rta);

export const checkRole =(role1: string, role2: string)=>{
  if(currentUser.role ===role1){
    return true;
  }
  if(currentUser.role === role2){
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2);

//enviarlo como array
export const checkRoleV2 =(roles:string[])=>{
  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoleV2', rta3);

//refactor como rest
export const checkRoleV3 =(...roles:string[])=>{
  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV3', rta4);
