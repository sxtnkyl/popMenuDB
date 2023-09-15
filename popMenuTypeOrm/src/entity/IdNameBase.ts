import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IdNameBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
