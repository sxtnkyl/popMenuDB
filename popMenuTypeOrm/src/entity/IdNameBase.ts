import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IdNameBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  name: string;
}
