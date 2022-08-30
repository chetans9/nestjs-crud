import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CustomersRepository } from './customers.repository';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
    /**
     * 
     * @param customersRepository 
     */
    constructor(@InjectRepository(Customer) private customersRepository : Repository<Customer>){

    }
    /**
     * 
     * @returns 
     */
    async getCustomers() : Promise<Customer[]>{

        return await this.customersRepository.find();



    }
    /**
     * 
     * @param id 
     * @returns 
     */
    async getById(id) : Promise<Customer>{

        const found = await this.customersRepository.findOne({where : { id : id}});


        if(!found){

            throw new NotFoundException(`Customer with id not found`);
            
        }

        return found;


    }

    /**
     * 
     * @param createCustomerDto 
     * @returns 
     */
    async createCustomer(createCustomerDto : CreateCustomerDto) : Promise<Customer>{

        const customer = this.customersRepository.create(createCustomerDto);
        await this.customersRepository.save(customer);
        return customer;
    }

    async delete(id : number) : Promise<void>{

        const result = await this.customersRepository.delete(id);
        if(result.affected === 0){

            throw new NotFoundException(`Customer with id ${id} Not foud`);

        }

    }
}
