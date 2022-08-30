import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Customer } from "../customers/customer.entity";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    status : string;

    @Column({nullable : true})
    created_at : Date;

    
    @ManyToOne(type => Customer, customer => customer.orders) customer : Customer

    

}
