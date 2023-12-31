import ServerOwnerFactory from '../../../domain/serverOwner/factory/serverOwner.factory';
import ServerOwnerRepositoryInterface from '../../../domain/serverOwner/repositories/serverOwner.repository.interface';
import UseCaseInterface from '../../../shared/usecase.interface';
import { InputCreateServerOwnerDto, OutputCreateServerOwnerDto } from './create.serverOwner.dto';

export default class CreateServerOwnerUseCase
  implements UseCaseInterface<InputCreateServerOwnerDto, OutputCreateServerOwnerDto>
{
  constructor(private serverOwnerRepository: ServerOwnerRepositoryInterface) {}

  async execute(input: InputCreateServerOwnerDto): Promise<OutputCreateServerOwnerDto> {
    const serverOwner = ServerOwnerFactory.create(input.name, input.email, input.password);
    await this.serverOwnerRepository.create(serverOwner);

    return {
      id: serverOwner.id,
      name: serverOwner.name,
      email: serverOwner.email,
    };
  }
}
