import {UserCreatableInterface} from '../Interfaces/user.creatable'
export class CreateUserDto implements UserCreatableInterface{
  username!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
}
