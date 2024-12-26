import {UserUpdatableInterface} from '../Interfaces/user.update';

export class UpdateUserDto implements UserUpdatableInterface{
    firstName?:string;
    lastName?:string;
    active?:boolean;
}