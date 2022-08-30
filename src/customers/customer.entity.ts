import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Order } from "../orders/order.entity";

@Entity()
export class Customer{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string;

    @Column()
    age : number;

    @Column('text')
    address : string

    @Column()
    mobile : string;

    @Column()
    email : string;

    @Column({nullable : true})
    active : string;

    @Column({nullable : true})
    created_at : Date;

    @Column({nullable : true})
    gender : string;

    @OneToMany(type => Order, order => order.customer) orders: Order[];  




}