import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('products')
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
    @Query('skinType') skinType: string,
    @Query('skinCondition') skinCondition: string,
  ) {
    return this.productsService.getRecommendation(skinType, skinCondition);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
}
