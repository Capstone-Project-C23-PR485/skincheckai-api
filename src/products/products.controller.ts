import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiQuery } from '@nestjs/swagger';
import { FirebaseAuthGuard } from '@whitecloak/nestjs-passport-firebase';

@Controller('products')
@UseGuards(FirebaseAuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('/recommendation')
  @ApiQuery({ name: 'skinType' })
  @ApiQuery({ name: 'skinCondition' })
  findRecommendation(
    @Query('skinType') skinType: 'oily' | 'dry' | 'combination' | 'sensitive',
  ) {
    return this.productsService.getRecommendation(skinType);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
}
