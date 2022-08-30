import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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




}