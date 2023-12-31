import ProductRepository from '../../../infrastructure/product/repositories/product.repository';
import CreateProductUseCase from './create.product.usecase';
import SaveImageCloud from '../../../infrastructure/product/uploadImage/product.uploadImage';

export default class CreateProductUsecaseFactory {
  static create() {
    return new CreateProductUseCase(new ProductRepository(), new SaveImageCloud());
  }
}
