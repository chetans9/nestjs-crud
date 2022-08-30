import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { ConfigModule } from '@nestjs/config';
import { Customer } from './customers/customer.entity';
import { Order } from './orders/order.entity';
import { OrdersModule } from './orders/orders.module';


@Module({
  imports: [
    CustomersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({

      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.port),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities : true,
      entities : [Customer, Order],
      synchronize : false,
      migrations : ['database/migrations'],
      migrationsTableName : 'migrations'

    }),
    OrdersModule
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
