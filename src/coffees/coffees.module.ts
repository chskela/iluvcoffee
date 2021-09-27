import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { CoffeesService } from './coffees.service';
import { COFFEE_BRANDS } from './coffees.constants';
import { Event } from 'src/events/entities/event.entity';
import { CoffeesController } from './coffees.controller';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useFactory: async (connection: Connection): Promise<string[]> => {
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
        return coffeeBrands;
      },
      inject: [Connection],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
