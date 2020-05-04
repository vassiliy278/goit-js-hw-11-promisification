const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName) => {
      return new Promise((resolve, reject) => {
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
          );
        
          resolve(updatedUsers);          
      })
    
  };
  
  const logger = updatedUsers => console.table(updatedUsers);

  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);
  
//   /*
//    * Сейчас работает так
//    */
//   toggleUserState(users, 'Mango', logger);
//   toggleUserState(users, 'Lux', logger);




// const promise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         const success = Math.random() > 0.3;
//         if (success) {
//             resolve('Success')
//         } else {reject('Bad Luck')}
// }, 10);
// });

// promise.then(success => console.log(success)).catch(error => console.error(`Error -> ${error}`));