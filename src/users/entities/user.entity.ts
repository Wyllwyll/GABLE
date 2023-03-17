import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Exclude } from 'class-transformer';
import { Order } from "src/orders/entities/order.entity";




@Entity('users')
@Unique(['email'])
export class User extends BaseEntity {


    @ApiProperty()
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;


    @ApiProperty()
    @Column({ type: 'varchar' })
    nom: string


    @ApiProperty()
    @Column({ type: 'varchar' })
    prenom: string


    @ApiProperty()
    @Column({ type: 'varchar' })
    adresse: string


    @ApiProperty()
    @Column({ type: 'varchar' })
    email: string;


    @Exclude()/* Exclut la propriété "password" */
    @ApiProperty()
    @Column({ type: 'varchar' })
    password: string;


    @ApiProperty()
    @Column({ type: 'int', default: 1 })
    access_lvl: number;



    @OneToMany(() => Order, (orders) => orders.user)
    orders: Order;









}