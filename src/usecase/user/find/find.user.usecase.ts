import UserRepositoryInterface from '../../../domain/user/repositories/user.repository';
import UseCaseInterface from '../../../shared/usecase.interface';
import { InputFindUserDto, OutputFindUserDto } from './find.user.dto';

export default class FindUserUseCase
  implements UseCaseInterface<InputFindUserDto, OutputFindUserDto>
{
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute(input: InputFindUserDto): Promise<OutputFindUserDto> {
    const user = await this.userRepository.find(input.id);
    return {
      id: user.id,
      name: user.name,
      gameUserId: user.gameUserId,
      email: user.email,
    };
  }
}
