import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a product with id ${id}`;
  }

  getRecommendation(skinType: string, skinCondition: string) {
    return `You are searching products for ${skinType} and ${skinCondition}`;
  }
}
