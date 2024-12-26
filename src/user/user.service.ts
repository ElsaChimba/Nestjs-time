import { Injectable} from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { User } from "./entities/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
@Injectable()
export class UserService{
  constructor(private userRepository:UserRepository){}

  public create(CreateUser): User {
    return this.userRepository.create(CreateUser);
  }

  public findAll(){
    return this.userRepository.findAll();
  }

  public findOne(id: string) :User {
    return this.userRepository.findOne(id)
  }

  public update( id: string, UpdateUserDto: UpdateUserDto){
    return this.userRepository.update(id, UpdateUserDto)
  }

  public remove( id: string){
    return this.userRepository.remove(id)
  }
}
