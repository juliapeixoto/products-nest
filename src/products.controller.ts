import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('BOOK0001', 'TDD e BDD na prática', 29.9),
    new Product('BOOK0002', 'NestJS na prática', 39.9),
    new Product('BOOK0003', 'React na prática', 49.9),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getOne(@Param() params): Product {
    return this.products[0];
  }

  @Post()
  create(@Body() product: Product) {
    product.id = 100;
    this.products.push(product);
  }

  @Put()
  update(@Body() product: Product): Product {
    return product;
  }

  @Delete(':id')
  delete(@Param() params) {
    this.products.pop();
  }
}
