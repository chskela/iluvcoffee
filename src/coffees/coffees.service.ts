import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((i) => i.id === Number(id));
  }

  create(coffee: any) {
    this.coffees.push(coffee);
  }

  update(id: string, coffee: UpdateCoffeeDto) {
    this.coffees = this.coffees.map((i) =>
      i.id === Number(id) ? { ...i, ...coffee } : i,
    );
  }

  remove(id: string) {
    this.coffees = this.coffees.filter((i) => i.id !== Number(id));
  }
}
