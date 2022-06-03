import { DataStore } from '@aws-amplify/datastore';
import { User } from './models';

const AmplifySet = () => {
  
  const DbCreate = async() => {
    await DataStore.save(
      new User({
        "Name": "Test user",
        "email": "test12346789@testemailtestemail.com",
        "image": "https://sandbox.amplifyapp.com/static/media/amplify-logo.677fad72.svg",
        "exterLink": "https://github.com/tereza-tech2/radijo",
        "userLevel": 2,
        "isActive": true
      })
    );
  };

  /*DbUpdate() {
    await DataStore.save(User.copyOf(CURRENT_ITEM, item => {
    }));
  };*/
/*
  async DbDelete() {
    const modelToDelete = await DataStore.query(User, 123456789);
    DataStore.delete(modelToDelete);
  };
*/
  const DbRequest = async() => {
    const models = await DataStore.query(User);
    console.log(models);
  }

  return(
    <div>
      <button onClick={DbCreate}>Add</button>
      <button onClick={DbRequest}>Get</button>
  </div>
  )
}

export default AmplifySet;