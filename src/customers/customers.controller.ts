import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';


@Controller('customers')
export class CustomersController {
    /**
     * 
     * @param customersService 
     */
    constructor(private customersService : CustomersService){}

    @Get()
    index() : Promise<Customer[]>{

        return this.customersService.getCustomers();

    }

    @Get('orders')
    customerOrders() : Promise<Customer>{
        return this.customersService.customerOrders();

    }

    @Get('ordersjoin')
    customerOrdersJoin(){
        return this.customersService.customerOrdersJoin();

    }
    /**
     * 
     * @param params 
     * @returns 
     */
    @Get(':id')
    getByID(@Param() params) : Promise<Customer>{
        
        return this.customersService.getById(params.id);

    }
    /**
     * 
     * @param createCustomerDto 
     * @returns 
     */
    @Post()
    createCustomer(@Body() createCustomerDto : CreateCustomerDto) : Promise<Customer>{


        return this.customersService.createCustomer(createCustomerDto);


    }


    /**
     * 
     * @param id 
     * @returns 
     */
    @Delete(':id')
    deleteCustomer(@Param('id') id: number) : Promise<void>{
        return this.customersService.delete(id);

    }

}
